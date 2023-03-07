/*
  Warnings:

  - You are about to drop the column `artist_id` on the `paintings` table. All the data in the column will be lost.
  - You are about to drop the `artists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `painter_id` to the `Paintings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `paintings` DROP FOREIGN KEY `Paintings_artist_id_fkey`;

-- AlterTable
ALTER TABLE `paintings` DROP COLUMN `artist_id`,
    ADD COLUMN `painter_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `artists`;

-- CreateTable
CREATE TABLE `Painters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `painter_uuid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `date_of_death` DATETIME(3) NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `picture_credits` VARCHAR(255) NOT NULL,
    `wiki_link` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Painters_painter_uuid_key`(`painter_uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Paintings` ADD CONSTRAINT `Paintings_painter_id_fkey` FOREIGN KEY (`painter_id`) REFERENCES `Painters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
