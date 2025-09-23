import { PrismaClient } from "@prisma/client";

export const db=await new PrismaClient();