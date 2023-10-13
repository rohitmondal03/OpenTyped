"use server"

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

type enteredDataType = {
    owner_name: string
    title: string
    description: string
    github_link: string
    userId: string
}

export async function submitNewProject(enteredData: enteredDataType) {
    await prisma.project.create({
        data: enteredData
    });

    revalidatePath("/projects");
}