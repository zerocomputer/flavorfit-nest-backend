/*
  Warnings:

  - You are about to drop the column `armCircumference` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `chestCircumference` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `currentWeight` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `hipsCircumference` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `targetWeight` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `waistCircumference` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "armCircumference",
DROP COLUMN "chestCircumference",
DROP COLUMN "currentWeight",
DROP COLUMN "height",
DROP COLUMN "hipsCircumference",
DROP COLUMN "targetWeight",
DROP COLUMN "waistCircumference";

-- CreateTable
CREATE TABLE "ProfileBodyProperties" (
    "profileId" TEXT NOT NULL,
    "currentWeight" DOUBLE PRECISION,
    "targetWeight" DOUBLE PRECISION,
    "waistCircumference" DOUBLE PRECISION,
    "chestCircumference" DOUBLE PRECISION,
    "hipsCircumference" DOUBLE PRECISION,
    "armCircumference" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProfileBodyProperties_pkey" PRIMARY KEY ("profileId")
);

-- AddForeignKey
ALTER TABLE "ProfileBodyProperties" ADD CONSTRAINT "ProfileBodyProperties_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
