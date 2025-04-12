"use server";

import { z } from "zod";
import { prisma } from "@/_lib/prisma";
import { revalidatePath } from "next/cache";

const todoValidateSchema = z.object({
  name: z.string().min(5),
});
export const todoCreate = async (prev: any, formData: FormData) => {
  const dataBody = todoValidateSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!dataBody.success) {
    return {
      status: "warning",
      Error: dataBody.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.todo.create({
      data: {
        name: dataBody.data.name,
      },
    });
    revalidatePath("/");
    return {
      status: "success",
    };
  } catch {
    return {
      status: "failed",
    };
  }
};
