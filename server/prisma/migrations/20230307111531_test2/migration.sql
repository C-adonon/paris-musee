-- DropForeignKey
ALTER TABLE `paintings` DROP FOREIGN KEY `Paintings_painter_id_fkey`;

-- AlterTable
ALTER TABLE `paintings` MODIFY `painter_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Paintings` ADD CONSTRAINT `Paintings_painter_id_fkey` FOREIGN KEY (`painter_id`) REFERENCES `Painters`(`painter_uuid`) ON DELETE SET NULL ON UPDATE CASCADE;
