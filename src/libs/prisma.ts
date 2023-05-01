/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
import { PrismaClient } from '@prisma/client';

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
const environment = process.env.NODE_ENV;
const environments = {
  TEST: 'test',
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

if (environment === environments.PRODUCTION) {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export default prisma;
