-- AddForeignKey
ALTER TABLE `Mine` ADD CONSTRAINT `Mine_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;