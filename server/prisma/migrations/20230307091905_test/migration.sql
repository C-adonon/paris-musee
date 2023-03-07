-- DropForeignKey
ALTER TABLE `paintings` DROP FOREIGN KEY `Paintings_painter_id_fkey`;

-- AlterTable
ALTER TABLE `painters` MODIFY `painter_uuid` VARCHAR(191) NULL,
    MODIFY `date_of_birth` DATETIME(3) NULL,
    MODIFY `date_of_death` DATETIME(3) NULL,
    MODIFY `picture` VARCHAR(255) NULL,
    MODIFY `picture_credits` VARCHAR(255) NULL,
    MODIFY `wiki_link` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `paintings` MODIFY `painting_uuid` VARCHAR(191) NULL,
    MODIFY `url` VARCHAR(255) NULL,
    MODIFY `painter_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Paintings` ADD CONSTRAINT `Paintings_painter_id_fkey` FOREIGN KEY (`painter_id`) REFERENCES `Painters`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
