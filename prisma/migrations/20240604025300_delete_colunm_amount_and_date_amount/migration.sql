/*
  Warnings:

  - You are about to drop the column `amount` on the `agendas_characteristics` table. All the data in the column will be lost.
  - You are about to drop the column `date_amount` on the `agendas_characteristics` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `agendas_characteristics` DROP COLUMN `amount`,
    DROP COLUMN `date_amount`;
