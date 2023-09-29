/*
  Warnings:

  - You are about to drop the column `vendorcategory` on the `vendor` table. All the data in the column will be lost.
  - You are about to drop the column `vendortype` on the `vendor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `vendor` DROP COLUMN `vendorcategory`,
    DROP COLUMN `vendortype`;

-- CreateTable
CREATE TABLE `VendorCategoy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Anvendor` VARCHAR(191) NULL,
    `MBTvendor` VARCHAR(191) NULL,
    `UserModelId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VendorType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `types` VARCHAR(191) NULL,
    `UserModelId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `superadmin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `moible_no` INTEGER NULL,
    `emailId` VARCHAR(191) NULL,
    `BranchLocationId` INTEGER NULL,
    `VendorModelId` INTEGER NULL,
    `reportId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VendorCategoy` ADD CONSTRAINT `VendorCategoy_UserModelId_fkey` FOREIGN KEY (`UserModelId`) REFERENCES `Vendor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VendorType` ADD CONSTRAINT `VendorType_UserModelId_fkey` FOREIGN KEY (`UserModelId`) REFERENCES `Vendor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `superadmin` ADD CONSTRAINT `superadmin_BranchLocationId_fkey` FOREIGN KEY (`BranchLocationId`) REFERENCES `Branchlocation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `superadmin` ADD CONSTRAINT `superadmin_VendorModelId_fkey` FOREIGN KEY (`VendorModelId`) REFERENCES `Vendor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `superadmin` ADD CONSTRAINT `superadmin_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `Report`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
