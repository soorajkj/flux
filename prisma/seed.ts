/* eslint-disable no-console */

import { PrismaClient, TagType } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const systemTags = [
    { name: "Important", type: TagType.SYSTEM },
    { name: "Urgent", type: TagType.SYSTEM },
    { name: "Optional", type: TagType.SYSTEM },
    { name: "Personal", type: TagType.SYSTEM },
    { name: "Work", type: TagType.SYSTEM },
  ];

  for (const tag of systemTags) {
    await prisma.tag.upsert({
      where: { name: tag.name },
      update: {},
      create: tag,
    });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
