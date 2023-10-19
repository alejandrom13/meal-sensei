import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DietRepository {

    async create(diet: any) {
        return await prisma.diet.create({
            data: diet
        }).catch((err) => {
            return err;
        })
    }

    async getAll() {
        return await prisma.diet.findMany().catch((err) => {
            return err;
        });
    }

    async getById(id: number) {
        return await prisma.diet.findUnique({
            where: {
                id: id
            },
        });
    }
    async update(id:number, diet: any) {
        return await prisma.diet.update({
            where: {
                id: id
            },
            data: diet
        });
    }
    async delete(id: string) {
        return await prisma.user.delete({
            where: {
                id: id
            }
        });
    }
}