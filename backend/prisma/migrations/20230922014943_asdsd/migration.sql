/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Mine` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Mine_id_key` ON `Mine`(`id`);
