"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createCommentSchema = z.object({
  body: z.string().min(1),
});

type CreateCommentFormState = {
  errors: {
    body?: string[];
    formErrors?: string[];
  };
};


