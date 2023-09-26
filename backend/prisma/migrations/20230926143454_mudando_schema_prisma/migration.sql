-- DropForeignKey
ALTER TABLE `mine` DROP FOREIGN KEY `Mine_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Mine` ADD CONSTRAINT `Mine_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
