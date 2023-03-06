/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `artist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `painting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `painting` DROP FOREIGN KEY `Painting_artist_id_fkey`;

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `artist`;

-- DropTable
DROP TABLE `painting`;

-- CreateTable
CREATE TABLE `Admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(32) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paintings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `painting_uuid` VARCHAR(191) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `artist_id` INTEGER NOT NULL,

    UNIQUE INDEX `Paintings_painting_uuid_key`(`painting_uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artists` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `artist_uuid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `date_of_death` DATETIME(3) NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `picture_credits` VARCHAR(255) NOT NULL,
    `wiki_link` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Artists_artist_uuid_key`(`artist_uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Paintings` ADD CONSTRAINT `Paintings_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `Artists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
