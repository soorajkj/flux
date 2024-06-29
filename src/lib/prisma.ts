/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

import { PrismaClient } from "@prisma/client";
import _ from "lodash";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient();

if (!_.isEqual(process.env.NODE_ENV, "production")) {
  globalThis.prisma = prisma;
}
