/*
  Warnings:

  - You are about to alter the column `number` on the `supplier` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `Int`.

*/
-- AlterTable
ALTER TABLE `supplier` MODIFY `number` INTEGER NOT NULL;
