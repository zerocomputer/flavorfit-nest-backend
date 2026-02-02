/*
  Warnings:

  - The primary key for the `ProfileBodyProperties` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[profileId]` on the table `ProfileBodyProperties` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bodyPropertiesId]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `ProfileBodyProperties` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `bodyPropertiesId` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProfileBodyProperties" DROP CONSTRAINT "ProfileBodyProperties_profileId_fkey";

-- AlterTable
ALTER TABLE "ProfileBodyProperties" DROP CONSTRAINT "ProfileBodyProperties_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "profileId" DROP NOT NULL,
ADD CONSTRAINT "ProfileBodyProperties_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "bodyPropertiesId" TEXT NOT NULL,
ADD COLUMN     "height" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProfileBodyProperties_profileId_key" ON "ProfileBodyProperties"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_bodyPropertiesId_key" ON "profiles"("bodyPropertiesId");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_bodyPropertiesId_fkey" FOREIGN KEY ("bodyPropertiesId") REFERENCES "ProfileBodyProperties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
