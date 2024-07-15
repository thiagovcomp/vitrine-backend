/*
  Warnings:

  - You are about to drop the `agendas_characteristics` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount_signal` to the `agendas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characteristic_id_braid_size` to the `agendas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characteristic_id_braid_thickness` to the `agendas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characteristic_id_braid_type` to the `agendas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characteristics_id_braid_material` to the `agendas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `agendas_characteristics` DROP FOREIGN KEY `agendas_characteristics_agenda_id_fkey`;

-- DropForeignKey
ALTER TABLE `agendas_characteristics` DROP FOREIGN KEY `agendas_characteristics_characteristic_id_fkey`;

-- AlterTable
ALTER TABLE `agendas` ADD COLUMN `amount_signal` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `characteristic_id_braid_size` INTEGER NOT NULL,
    ADD COLUMN `characteristic_id_braid_thickness` INTEGER NOT NULL,
    ADD COLUMN `characteristic_id_braid_type` INTEGER NOT NULL,
    ADD COLUMN `characteristics_id_braid_material` INTEGER NOT NULL;

-- DropTable
DROP TABLE `agendas_characteristics`;

-- AddForeignKey
ALTER TABLE `agendas` ADD CONSTRAINT `agendas_characteristic_id_braid_type_fkey` FOREIGN KEY (`characteristic_id_braid_type`) REFERENCES `characteristic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas` ADD CONSTRAINT `agendas_characteristic_id_braid_size_fkey` FOREIGN KEY (`characteristic_id_braid_size`) REFERENCES `characteristic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas` ADD CONSTRAINT `agendas_characteristic_id_braid_thickness_fkey` FOREIGN KEY (`characteristic_id_braid_thickness`) REFERENCES `characteristic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas` ADD CONSTRAINT `agendas_characteristics_id_braid_material_fkey` FOREIGN KEY (`characteristics_id_braid_material`) REFERENCES `characteristic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
