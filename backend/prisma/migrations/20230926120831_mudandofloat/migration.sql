/*
  Warnings:

  - You are about to alter the column `valor` on the `mine` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `valorConta` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `mine` MODIFY `valor` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `valorConta` DOUBLE NOT NULL;
