/*
  Warnings:

  - The values [CM] on the enum `Unit` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[name]` on the table `recipe_categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[receptId,index]` on the table `recipe_images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[receptId,index]` on the table `recipe_steps` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,deleted_at]` on the table `recipes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `index` to the `recipe_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Unit_new" AS ENUM ('ML', 'GRAM', 'UNITS');
ALTER TABLE "ingredients" ALTER COLUMN "unit" TYPE "Unit_new" USING ("unit"::text::"Unit_new");
ALTER TYPE "Unit" RENAME TO "Unit_old";
ALTER TYPE "Unit_new" RENAME TO "Unit";
DROP TYPE "public"."Unit_old";
COMMIT;

-- AlterTable
ALTER TABLE "recipe_images" ADD COLUMN     "index" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "recipes" ADD COLUMN     "can_be_order" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "recipe_categories_name_key" ON "recipe_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_images_receptId_index_key" ON "recipe_images"("receptId", "index");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_steps_receptId_index_key" ON "recipe_steps"("receptId", "index");

-- CreateIndex
CREATE UNIQUE INDEX "recipes_name_deleted_at_key" ON "recipes"("name", "deleted_at");
