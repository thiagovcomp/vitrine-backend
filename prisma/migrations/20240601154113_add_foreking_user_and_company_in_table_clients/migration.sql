/*
  Warnings:

  - Added the required column `company_id` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clients` ADD COLUMN `company_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companys`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
