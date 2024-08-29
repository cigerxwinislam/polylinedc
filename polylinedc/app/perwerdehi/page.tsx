// Bismillahirahmanirahim



import prisma from "generated/prisma";

const posts = await prisma.post.findMany();