-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Painting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `painting_uuid` VARCHAR(191) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `artist_id` INTEGER NOT NULL,

    UNIQUE INDEX `Painting_painting_uuid_key`(`painting_uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `artist_uuid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `date_of_death` DATETIME(3) NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `picture_credits` VARCHAR(255) NOT NULL,
    `wiki_link` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Artist_artist_uuid_key`(`artist_uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Painting` ADD CONSTRAINT `Painting_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `Artist`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
