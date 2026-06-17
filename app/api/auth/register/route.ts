import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { sign } from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const { username, email, password, firstName, lastName } = await request.json();

    if (!username || !email || !password) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });

    if (existing) {
      return Response.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    await prisma.userStatistics.create({
      data: { userId: user.id },
    });

    const token = sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    return Response.json(
      {
        message: 'User registered successfully',
        user: { id: user.id, username, email, firstName, lastName },
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}