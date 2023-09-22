/*
  Warnings:

  - The required column `idMatch` was added to the `Mine` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `mine` ADD COLUMN `idMatch` VARCHAR(191) NOT NULL;
