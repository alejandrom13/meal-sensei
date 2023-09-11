/*
  Warnings:

  - A unique constraint covering the columns `[dietId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "dietId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Payment_dietId_key" ON "Payment"("dietId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_dietId_fkey" FOREIGN KEY ("dietId") REFERENCES "Diet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
