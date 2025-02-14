/*
  Warnings:

  - Added the required column `birthdate` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postal_code` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` ADD COLUMN `birthdate` DATETIME(3) NOT NULL,
    ADD COLUMN `city` VARCHAR(50) NOT NULL,
    ADD COLUMN `complement` VARCHAR(50) NULL,
    ADD COLUMN `neighborhood` VARCHAR(50) NULL,
    ADD COLUMN `number` VARCHAR(10) NULL,
    ADD COLUMN `postal_code` VARCHAR(10) NOT NULL,
    ADD COLUMN `state` VARCHAR(2) NOT NULL,
    ADD COLUMN `street` VARCHAR(100) NULL,
    MODIFY `cpf` VARCHAR(15) NOT NULL,
    MODIFY `phone` VARCHAR(15) NOT NULL;
