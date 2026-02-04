/*
  Warnings:

  - You are about to drop the column `recept_id` on the `recipe_ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `recept_id` on the `recipe_views` table. All the data in the column will be lost.
  - Added the required column `recipe_id` to the `recipe_ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipe_id` to the `recipe_views` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "recipe_ingredients" DROP CONSTRAINT "recipe_ingredients_recept_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_views" DROP CONSTRAINT "recipe_views_recept_id_fkey";

-- AlterTable
ALTER TABLE "recipe_ingredients" DROP COLUMN "recept_id",
ADD COLUMN     "recipe_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "recipe_views" DROP COLUMN "recept_id",
ADD COLUMN     "recipe_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "recipe_views" ADD CONSTRAINT "recipe_views_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "recipe_ingredients_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
