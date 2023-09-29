-- CreateTable
CREATE TABLE `Vendor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `Email` VARCHAR(191) NULL,
    `mobileno` INTEGER NULL,
    `username` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `vendorcategory` VARCHAR(191) NULL,
    `vendortype` VARCHAR(191) NULL,
    `User` BOOLEAN NULL DEFAULT false,
    `Admin` BOOLEAN NULL DEFAULT false,
    `Authoriser` BOOLEAN NULL DEFAULT false,
    `Verifier` BOOLEAN NULL DEFAULT false,
    `BranchLocationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Report` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `BillDate` DATETIME(3) NOT NULL,
    `Perticular` VARCHAR(191) NOT NULL,
    `Basicamount` INTEGER NOT NULL,
    `GSTamount` INTEGER NOT NULL,
    `TDS` INTEGER NOT NULL,
    `Total` INTEGER NOT NULL,
    `Advancepayment` INTEGER NOT NULL,
    `GSTstatus` VARCHAR(191) NOT NULL,
    `Bill_approved_status` VARCHAR(191) NOT NULL,
    `VendorModelId` INTEGER NOT NULL,
    `BranchLocationId` INTEGER NOT NULL,
    `status` ENUM('Pending', 'Approved', 'Rejected') NOT NULL DEFAULT 'Pending',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branchlocation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `BranchLocationId` INTEGER NOT NULL,
    `branch` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `editor` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `History` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reportId` INTEGER NOT NULL,
    `editor` VARCHAR(191) NOT NULL,
    `historyStatus` ENUM('Approved', 'Pending', 'Rejected') NOT NULL DEFAULT 'Pending',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Approve` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(191) NOT NULL,
    `reportId` INTEGER NOT NULL,
    `VendorModelId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rejected` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(191) NOT NULL,
    `reportId` INTEGER NOT NULL,
    `VendorModelId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoryComment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `editor` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ReportComment` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ReportComment_AB_unique`(`A`, `B`),
    INDEX `_ReportComment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CommentToHistoryComment` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CommentToHistoryComment_AB_unique`(`A`, `B`),
    INDEX `_CommentToHistoryComment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HistoryToRejected` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_HistoryToRejected_AB_unique`(`A`, `B`),
    INDEX `_HistoryToRejected_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HistoryToHistoryComment` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_HistoryToHistoryComment_AB_unique`(`A`, `B`),
    INDEX `_HistoryToHistoryComment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ApproveToHistory` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ApproveToHistory_AB_unique`(`A`, `B`),
    INDEX `_ApproveToHistory_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vendor` ADD CONSTRAINT `Vendor_BranchLocationId_fkey` FOREIGN KEY (`BranchLocationId`) REFERENCES `Branchlocation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_VendorModelId_fkey` FOREIGN KEY (`VendorModelId`) REFERENCES `Vendor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_BranchLocationId_fkey` FOREIGN KEY (`BranchLocationId`) REFERENCES `Branchlocation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `Report`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approve` ADD CONSTRAINT `Approve_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `Report`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approve` ADD CONSTRAINT `Approve_VendorModelId_fkey` FOREIGN KEY (`VendorModelId`) REFERENCES `Vendor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rejected` ADD CONSTRAINT `Rejected_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `Report`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rejected` ADD CONSTRAINT `Rejected_VendorModelId_fkey` FOREIGN KEY (`VendorModelId`) REFERENCES `Vendor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReportComment` ADD CONSTRAINT `_ReportComment_A_fkey` FOREIGN KEY (`A`) REFERENCES `Comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReportComment` ADD CONSTRAINT `_ReportComment_B_fkey` FOREIGN KEY (`B`) REFERENCES `Report`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CommentToHistoryComment` ADD CONSTRAINT `_CommentToHistoryComment_A_fkey` FOREIGN KEY (`A`) REFERENCES `Comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CommentToHistoryComment` ADD CONSTRAINT `_CommentToHistoryComment_B_fkey` FOREIGN KEY (`B`) REFERENCES `HistoryComment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HistoryToRejected` ADD CONSTRAINT `_HistoryToRejected_A_fkey` FOREIGN KEY (`A`) REFERENCES `History`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HistoryToRejected` ADD CONSTRAINT `_HistoryToRejected_B_fkey` FOREIGN KEY (`B`) REFERENCES `Rejected`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HistoryToHistoryComment` ADD CONSTRAINT `_HistoryToHistoryComment_A_fkey` FOREIGN KEY (`A`) REFERENCES `History`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HistoryToHistoryComment` ADD CONSTRAINT `_HistoryToHistoryComment_B_fkey` FOREIGN KEY (`B`) REFERENCES `HistoryComment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ApproveToHistory` ADD CONSTRAINT `_ApproveToHistory_A_fkey` FOREIGN KEY (`A`) REFERENCES `Approve`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ApproveToHistory` ADD CONSTRAINT `_ApproveToHistory_B_fkey` FOREIGN KEY (`B`) REFERENCES `History`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
