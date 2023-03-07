/*
  Warnings:

  - You are about to alter the column `painter_id` on the `paintings` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Made the column `painting_uuid` on table `paintings` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `paintings` DROP FOREIGN KEY `Paintings_painter_id_fkey`;

-- AlterTable
ALTER TABLE `paintings` MODIFY `painting_uuid` VARCHAR(191) NOT NULL,
    MODIFY `painter_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Paintings` ADD CONSTRAINT `Paintings_painter_id_fkey` FOREIGN KEY (`painter_id`) REFERENCES `Painters`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
