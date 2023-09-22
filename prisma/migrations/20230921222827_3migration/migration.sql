/*
  Warnings:

  - Added the required column `valor` to the `Mine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mine` ADD COLUMN `valor` INTEGER NOT NULL;
