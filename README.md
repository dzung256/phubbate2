# Phubbate2 🎤

Phubbate2 là một nền tảng học và luyện debate dành cho học sinh, sinh viên và người mới bắt đầu.

## 🌟 Features

- ✅ User Authentication (Register/Login with JWT)
- ✅ AI-Powered Debate Feedback
- ✅ Lesson Management (Beginner/Intermediate/Advanced)
- ✅ Training Modes (AI vs Human, Rebuttal Practice)
- ✅ Topic Browser
- ✅ Debate Prep Workspace
- ✅ User Statistics & Progress Tracking
- ✅ Admin Panel

## 🚀 Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Query
- Axios

### Backend
- Node.js + Express
- TypeScript
- PostgreSQL + Prisma ORM
- JWT Authentication
- OpenAI API Integration

## 📦 Deployment

### Vercel (Frontend)
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Next.js
3. Set environment variables in Vercel dashboard
4. Deploy with one click!

### Backend Deployment Options
- Heroku: `git push heroku main`
- Railway: Connect GitHub repo to Railway
- Render: Connect GitHub repo to Render

## 🏃 Quick Start (Local Development)

### Prerequisites
- Node.js 18+
- PostgreSQL
- OpenAI API Key

### Setup

```bash
# 1. Clone repository
git clone https://github.com/dzung256/phubbate2.git
cd phubbate2

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# 4. Setup database
npx prisma migrate dev
npx prisma db seed

# 5. Run development server
npm run dev
```

**Access:** http://localhost:3000

## 🌐 Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/phubbate2
JWT_SECRET=your-secret-key
OPENAI_API_KEY=sk-your-key
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📚 API Routes

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/lessons` - Get all lessons
- `POST /api/training/start` - Start training session
- `POST /api/ai/judge` - Get AI judge feedback

## 🔧 Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Database migrations
npx prisma migrate dev
npx prisma studio
```

## 📖 Project Structure

```
phubbate2/
├── app/              # Next.js app directory
├── api/              # API routes
├── components/       # React components
├── lib/              # Utilities & hooks
├── prisma/           # Database schema & migrations
├── public/           # Static assets
└── styles/           # Global styles
```

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select this repository
5. Vercel auto-detects Next.js
6. Add environment variables
7. Click "Deploy"

## 📝 License

MIT
