/*
  Warnings:

  - The primary key for the `mine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `mine` table. All the data in the column will be lost.
  - Added the required column `entityId` to the `Mine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `mine` DROP FOREIGN KEY `Mine_id_fkey`;

-- DropIndex
DROP INDEX `Mine_userId_fkey` ON `mine`;

-- AlterTable
ALTER TABLE `mine` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `entityId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`entityId`);

-- AddForeignKey
ALTER TABLE `Mine` ADD CONSTRAINT `Mine_entityId_fkey` FOREIGN KEY (`entityId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
