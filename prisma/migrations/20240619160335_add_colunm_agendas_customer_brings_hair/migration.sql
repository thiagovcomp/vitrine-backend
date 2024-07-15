/*
  Warnings:

  - You are about to alter the column `duration` on the `agendas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(12)`.

*/
-- AlterTable
ALTER TABLE `agendas` ADD COLUMN `customer_brings_hair` ENUM('SIM', 'NAO') NOT NULL DEFAULT 'SIM',
    MODIFY `duration` VARCHAR(12) NOT NULL;
