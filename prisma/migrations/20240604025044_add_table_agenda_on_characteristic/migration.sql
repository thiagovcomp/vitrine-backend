-- CreateTable
CREATE TABLE `agendas_characteristics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agenda_id` INTEGER NOT NULL,
    `characteristic_id` INTEGER NOT NULL,
    `uuid` VARCHAR(45) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `date_amount` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `agendas_characteristics` ADD CONSTRAINT `agendas_characteristics_agenda_id_fkey` FOREIGN KEY (`agenda_id`) REFERENCES `agendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas_characteristics` ADD CONSTRAINT `agendas_characteristics_characteristic_id_fkey` FOREIGN KEY (`characteristic_id`) REFERENCES `characteristic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
