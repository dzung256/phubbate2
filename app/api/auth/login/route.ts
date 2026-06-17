import { compare } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { sign } from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { error: 'Email and password required' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.isBanned) {
      return Response.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const validPassword = await compare(password, user.password);
    if (!validPassword) {
      return Response.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    return Response.json(
      {
        message: 'Login successful',
        user: { id: user.id, username: user.username, email },
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}