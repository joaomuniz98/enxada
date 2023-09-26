/*
  Warnings:

  - You are about to drop the column `valorConta` on the `user` table. All the data in the column will be lost.
  - Added the required column `valor_conta` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `valorConta`,
    ADD COLUMN `valor_conta` DECIMAL(9, 2) NOT NULL;
