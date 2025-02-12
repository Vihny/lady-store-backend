-- CreateTable
CREATE TABLE `Customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `cpf` CHAR(15) NOT NULL,
    `phone` CHAR(15) NOT NULL,

    UNIQUE INDEX `Customer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80) NOT NULL,
    `brand` VARCHAR(80) NOT NULL,
    `model` VARCHAR(80) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    `size` VARCHAR(20) NOT NULL,
    `color` VARCHAR(40) NOT NULL,
    `price` DOUBLE NOT NULL,
    `supplier_id` INTEGER NOT NULL, -- Relacionamento com Fornecedor

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `unit` VARCHAR(50) NOT NULL,
    `quantity` DOUBLE NOT NULL,
    `code` VARCHAR(50) NOT NULL,
    `complement` VARCHAR(100) NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sale` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sale_date` VARCHAR(50) NOT NULL,
    `sale_state` VARCHAR(50) NOT NULL,
    `observation` VARCHAR(200) NULL,
    `stock_id` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Financial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `operation_date` VARCHAR(50) NOT NULL,
    `operation_type` VARCHAR(50) NOT NULL,
    `value` DOUBLE NOT NULL,
    `description` VARCHAR(200) NULL,
    `sale_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_name` VARCHAR(100) NOT NULL,
    `trading_name` VARCHAR(100) NOT NULL,
    `cnpj` CHAR(18) NOT NULL,
    `phone` CHAR(15) NOT NULL,
     postal_code CHAR(10) NOT NULL, 
    state VARCHAR(50) NOT NULL,     
    city VARCHAR(50) NOT NULL,      
    neighborhood VARCHAR(50) NOT NULL, 
    street VARCHAR(100) NOT NULL,   
    number VARCHAR(10) NOT NULL,    
    complement VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_stock_id_fkey` FOREIGN KEY (`stock_id`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Financial` ADD CONSTRAINT `Finance_sale_id_fkey` FOREIGN KEY (`sale_id`) REFERENCES `Sale`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;