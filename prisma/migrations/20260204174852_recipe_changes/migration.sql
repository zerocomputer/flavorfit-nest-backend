/*
  Warnings:

  - You are about to drop the column `receptId` on the `recipe_images` table. All the data in the column will be lost.
  - You are about to drop the column `receptId` on the `recipe_steps` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[recipe_id,index]` on the table `recipe_images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[recipe_id,index]` on the table `recipe_steps` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `recipe_id` to the `recipe_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipe_id` to the `recipe_steps` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "recipe_images" DROP CONSTRAINT "recipe_images_receptId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_steps" DROP CONSTRAINT "recipe_steps_receptId_fkey";

-- DropIndex
DROP INDEX "recipe_images_receptId_index_key";

-- DropIndex
DROP INDEX "recipe_steps_receptId_index_key";

-- AlterTable
ALTER TABLE "recipe_images" DROP COLUMN "receptId",
ADD COLUMN     "recipe_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "recipe_steps" DROP COLUMN "receptId",
ADD COLUMN     "recipe_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "recipe_images_recipe_id_index_key" ON "recipe_images"("recipe_id", "index");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_steps_recipe_id_index_key" ON "recipe_steps"("recipe_id", "index");

-- AddForeignKey
ALTER TABLE "recipe_images" ADD CONSTRAINT "recipe_images_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_steps" ADD CONSTRAINT "recipe_steps_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
