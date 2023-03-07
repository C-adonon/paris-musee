/*
  Warnings:

  - You are about to drop the column `painter_uuid` on the `painters` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Painters` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Painters_painter_uuid_key` ON `painters`;

-- AlterTable
ALTER TABLE `painters` DROP COLUMN `painter_uuid`;

-- CreateIndex
CREATE UNIQUE INDEX `Painters_name_key` ON `Painters`(`name`);
