"use server"

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function submitNewProject(enteredData: ProjectEntryType) {
    await prisma.project.create({
        data: enteredData
    });

    revalidatePath("/projects");
}