import { PrismaClient } from "@/generated/prisma";

const globarDb=global as unknown as {Prisma:PrismaClient};

export const db=globarDb.Prisma??new PrismaClient();

if(process.env.NODE_ENV!=="production") globarDb.Prisma=db;