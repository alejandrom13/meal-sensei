/*
  Warnings:

  - You are about to drop the column `userId` on the `Diet` table. All the data in the column will be lost.
  - Added the required column `email` to the `Diet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Diet" DROP CONSTRAINT "Diet_userId_fkey";

-- AlterTable
ALTER TABLE "Diet" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Diet" ADD CONSTRAINT "Diet_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
