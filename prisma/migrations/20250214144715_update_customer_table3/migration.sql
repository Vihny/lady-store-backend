/*
  Warnings:

  - You are about to alter the column `number` on the `customer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `Int`.

*/
-- AlterTable
ALTER TABLE `customer` MODIFY `number` INTEGER NULL,
    MODIFY `state` VARCHAR(20) NOT NULL;
