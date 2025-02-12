-- DropForeignKey
ALTER TABLE `financial` DROP FOREIGN KEY `Finance_sale_id_fkey`;

-- AddForeignKey
ALTER TABLE `Financial` ADD CONSTRAINT `Financial_sale_id_fkey` FOREIGN KEY (`sale_id`) REFERENCES `Sale`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
