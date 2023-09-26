/*
  Warnings:

  - The primary key for the `mine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `entityId` on the `mine` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Mine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `mine` DROP FOREIGN KEY `Mine_entityId_fkey`;

-- AlterTable
ALTER TABLE `mine` DROP PRIMARY KEY,
    DROP COLUMN `entityId`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_userId_key` ON `User`(`userId`);

-- AddForeignKey
ALTER TABLE `Mine` ADD CONSTRAINT `Mine_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
