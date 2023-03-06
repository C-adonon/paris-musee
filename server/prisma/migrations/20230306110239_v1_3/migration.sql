/*
  Warnings:

  - You are about to alter the column `password` on the `admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(32)`.

*/
-- AlterTable
ALTER TABLE `admin` MODIFY `password` VARCHAR(32) NOT NULL;
