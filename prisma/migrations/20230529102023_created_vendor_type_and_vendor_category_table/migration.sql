/*
  Warnings:

  - You are about to drop the column `VendorModelId` on the `approve` table. All the data in the column will be lost.
  - You are about to drop the column `VendorModelId` on the `rejected` table. All the data in the column will be lost.
  - You are about to drop the column `Bill_approved_status` on the `report` table. All the data in the column will be lost.
  - You are about to alter the column `GSTstatus` on the `report` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to drop the `_reportcomment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `reportId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentamount` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_reportcomment` DROP FOREIGN KEY `_ReportComment_A_fkey`;

-- DropForeignKey
ALTER TABLE `_reportcomment` DROP FOREIGN KEY `_ReportComment_B_fkey`;

-- DropForeignKey
ALTER TABLE `approve` DROP FOREIGN KEY `Approve_VendorModelId_fkey`;

-- DropForeignKey
ALTER TABLE `rejected` DROP FOREIGN KEY `Rejected_VendorModelId_fkey`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `Report_BranchLocationId_fkey`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `Report_VendorModelId_fkey`;

-- DropForeignKey
ALTER TABLE `vendor` DROP FOREIGN KEY `Vendor_BranchLocationId_fkey`;

-- AlterTable
ALTER TABLE `approve` DROP COLUMN `VendorModelId`;

-- AlterTable
ALTER TABLE `comment` ADD COLUMN `reportId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `rejected` DROP COLUMN `VendorModelId`;

-- AlterTable
ALTER TABLE `report` DROP COLUMN `Bill_approved_status`,
    ADD COLUMN `location` VARCHAR(191) NOT NULL,
    ADD COLUMN `paymentamount` INTEGER NOT NULL,
    MODIFY `BillDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `GSTstatus` ENUM('pending', 'paid') NOT NULL DEFAULT 'pending',
    MODIFY `VendorModelId` INTEGER NULL,
    MODIFY `BranchLocationId` INTEGER NULL;

-- AlterTable
ALTER TABLE `vendor` MODIFY `BranchLocationId` INTEGER NULL;

-- DropTable
DROP TABLE `_reportcomment`;

-- AddForeignKey
ALTER TABLE `Vendor` ADD CONSTRAINT `Vendor_BranchLocationId_fkey` FOREIGN KEY (`BranchLocationId`) REFERENCES `Branchlocation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_VendorModelId_fkey` FOREIGN KEY (`VendorModelId`) REFERENCES `Vendor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_BranchLocationId_fkey` FOREIGN KEY (`BranchLocationId`) REFERENCES `Branchlocation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `Report`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
