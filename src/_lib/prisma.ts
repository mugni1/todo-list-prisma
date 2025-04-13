import { PrismaClient } from "@/generated/prisma";

// Type khusus untuk globalThis dengan prisma
type GlobalWithPrisma = typeof globalThis & {
  prisma?: PrismaClient;
};

// Inisialisasi PrismaClient
export const prisma =
  (globalThis as GlobalWithPrisma).prisma || new PrismaClient();

// Simpan instance di globalThis untuk development
if (process.env.NODE_ENV !== "production") {
  (globalThis as GlobalWithPrisma).prisma = prisma;
}
