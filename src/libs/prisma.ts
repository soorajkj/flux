/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

import { PrismaClient } from '@prisma/client';

const _env = process.env.NODE_ENV;
const environments = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();
if (_env !== environments.PRODUCTION) globalThis.prisma = prisma;

export { prisma };
