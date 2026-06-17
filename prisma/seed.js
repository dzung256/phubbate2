const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Seed lessons
  const lessons = [
    {
      title: 'What is Debate?',
      description: 'Introduction to debate',
      content: 'Debate is a formal discussion where two sides present arguments.',
      level: 'BEGINNER',
      category: 'fundamentals',
      order: 1,
      duration: 15,
    },
    {
      title: 'Debate Formats',
      description: 'Learn different debate formats',
      content: 'There are many debate formats used around the world.',
      level: 'BEGINNER',
      category: 'fundamentals',
      order: 2,
      duration: 20,
    },
  ];

  for (const lesson of lessons) {
    await prisma.lesson.create({ data: lesson });
  }

  // Seed topics
  const topics = [
    {
      title: 'Technology and Society',
      description: 'How technology impacts modern society',
      category: 'TECHNOLOGY',
      difficulty: 5,
      pros: 'Improves efficiency and connectivity',
      cons: 'Can lead to privacy concerns',
    },
    {
      title: 'Climate Change Action',
      description: 'Should governments enforce stricter environmental policies?',
      category: 'ENVIRONMENT',
      difficulty: 7,
      pros: 'Protects the planet',
      cons: 'May impact economies',
    },
  ];

  for (const topic of topics) {
    await prisma.topic.create({ data: topic });
  }

  console.log('✅ Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });