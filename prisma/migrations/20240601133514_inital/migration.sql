-- CreateTable
CREATE TABLE `companys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_id` INTEGER NOT NULL,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(45) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `valid` ENUM('SIM', 'NAO') NOT NULL DEFAULT 'NAO',
    `active` ENUM('SIM', 'NAO') NOT NULL DEFAULT 'SIM',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `role_id` INTEGER NOT NULL,
    `uuid` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(45) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_category_id` INTEGER NOT NULL,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `characteristic_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `characteristic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `characteristic_type_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_methods` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(45) NOT NULL,
    `client_id` INTEGER NOT NULL,
    `company_id` INTEGER NOT NULL,
    `user_id_owner` INTEGER NOT NULL,
    `payment_method_id` INTEGER NOT NULL,
    `start` DATETIME(3) NOT NULL,
    `end` DATETIME(3) NOT NULL,
    `duration` TIME(0) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `fine_delay_amount` DECIMAL(10, 2) NOT NULL,
    `fine_delay_observation` TEXT NOT NULL,
    `observation` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agendas_payment_methods` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agenda_id` INTEGER NOT NULL,
    `payment_method_id` INTEGER NOT NULL,
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

-- CreateTable
CREATE TABLE `agenda_files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agenda_id` INTEGER NOT NULL,
    `file_type_id` INTEGER NOT NULL,
    `uuid` VARCHAR(45) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `arquivo` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agenda_services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agenda_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agendas_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agenda_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `uuid` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `user_id_created` INTEGER NULL,
    `user_id_updated` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companys`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_roles` ADD CONSTRAINT `users_roles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_roles` ADD CONSTRAINT `users_roles_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `service` ADD CONSTRAINT `service_service_category_id_fkey` FOREIGN KEY (`service_category_id`) REFERENCES `service_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `characteristic` ADD CONSTRAINT `characteristic_characteristic_type_id_fkey` FOREIGN KEY (`characteristic_type_id`) REFERENCES `characteristic_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `characteristic` ADD CONSTRAINT `characteristic_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas` ADD CONSTRAINT `agendas_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas` ADD CONSTRAINT `agendas_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companys`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas` ADD CONSTRAINT `agendas_user_id_owner_fkey` FOREIGN KEY (`user_id_owner`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas` ADD CONSTRAINT `agendas_payment_method_id_fkey` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas_payment_methods` ADD CONSTRAINT `agendas_payment_methods_agenda_id_fkey` FOREIGN KEY (`agenda_id`) REFERENCES `agendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas_payment_methods` ADD CONSTRAINT `agendas_payment_methods_payment_method_id_fkey` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agenda_files` ADD CONSTRAINT `agenda_files_agenda_id_fkey` FOREIGN KEY (`agenda_id`) REFERENCES `agendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agenda_files` ADD CONSTRAINT `agenda_files_file_type_id_fkey` FOREIGN KEY (`file_type_id`) REFERENCES `file_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agenda_services` ADD CONSTRAINT `agenda_services_agenda_id_fkey` FOREIGN KEY (`agenda_id`) REFERENCES `agendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agenda_services` ADD CONSTRAINT `agenda_services_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas_users` ADD CONSTRAINT `agendas_users_agenda_id_fkey` FOREIGN KEY (`agenda_id`) REFERENCES `agendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendas_users` ADD CONSTRAINT `agendas_users_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
