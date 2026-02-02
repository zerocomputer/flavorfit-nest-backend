/*
  Warnings:

  - You are about to drop the column `activityLevelId` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `bodyPropertiesId` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `nutritionGoalId` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profilePhotoUrl` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `ProfileBodyProperties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `activity_levels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comment_likes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forum_message_likes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forum_messages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forum_subscriptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forum_topics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ingredients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notifications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nutrition_goals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order_ingredients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order_recipes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment_methods` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_ingredients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_likes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_steps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_views` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `social_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `task_tag_types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `task_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `armCircumference` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chestCircumference` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentWeight` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hipsCircumference` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetWeight` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waistCircumference` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoUrl` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `phoneNumber` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `biography` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "PaymentMethodType" AS ENUM ('SBP', 'CARD');

-- DropForeignKey
ALTER TABLE "comment_likes" DROP CONSTRAINT "comment_likes_commentId_fkey";

-- DropForeignKey
ALTER TABLE "comment_likes" DROP CONSTRAINT "comment_likes_userId_fkey";

-- DropForeignKey
ALTER TABLE "forum_message_likes" DROP CONSTRAINT "forum_message_likes_messageId_fkey";

-- DropForeignKey
ALTER TABLE "forum_message_likes" DROP CONSTRAINT "forum_message_likes_userId_fkey";

-- DropForeignKey
ALTER TABLE "forum_messages" DROP CONSTRAINT "forum_messages_authorId_fkey";

-- DropForeignKey
ALTER TABLE "forum_messages" DROP CONSTRAINT "forum_messages_replyToId_fkey";

-- DropForeignKey
ALTER TABLE "forum_messages" DROP CONSTRAINT "forum_messages_topicId_fkey";

-- DropForeignKey
ALTER TABLE "forum_subscriptions" DROP CONSTRAINT "forum_subscriptions_subscriberId_fkey";

-- DropForeignKey
ALTER TABLE "forum_subscriptions" DROP CONSTRAINT "forum_subscriptions_topicId_fkey";

-- DropForeignKey
ALTER TABLE "forum_topics" DROP CONSTRAINT "forum_topics_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_recipientId_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_senderId_fkey";

-- DropForeignKey
ALTER TABLE "order_ingredients" DROP CONSTRAINT "order_ingredients_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "order_ingredients" DROP CONSTRAINT "order_ingredients_orderId_fkey";

-- DropForeignKey
ALTER TABLE "order_recipes" DROP CONSTRAINT "order_recipes_orderId_fkey";

-- DropForeignKey
ALTER TABLE "order_recipes" DROP CONSTRAINT "order_recipes_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_courierId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_customerId_fkey";

-- DropForeignKey
ALTER TABLE "payment_methods" DROP CONSTRAINT "payment_methods_userId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_activityLevelId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_bodyPropertiesId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_nutritionGoalId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_categories" DROP CONSTRAINT "recipe_categories_parentId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_comments" DROP CONSTRAINT "recipe_comments_authorId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_comments" DROP CONSTRAINT "recipe_comments_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_images" DROP CONSTRAINT "recipe_images_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_ingredients" DROP CONSTRAINT "recipe_ingredients_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_ingredients" DROP CONSTRAINT "recipe_ingredients_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_likes" DROP CONSTRAINT "recipe_likes_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_likes" DROP CONSTRAINT "recipe_likes_userId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_steps" DROP CONSTRAINT "recipe_steps_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_views" DROP CONSTRAINT "recipe_views_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "recipe_views" DROP CONSTRAINT "recipe_views_viewerId_fkey";

-- DropForeignKey
ALTER TABLE "recipes" DROP CONSTRAINT "recipes_authorId_fkey";

-- DropForeignKey
ALTER TABLE "recipes" DROP CONSTRAINT "recipes_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "social_links" DROP CONSTRAINT "social_links_userId_fkey";

-- DropForeignKey
ALTER TABLE "task_tags" DROP CONSTRAINT "task_tags_tagTypeId_fkey";

-- DropForeignKey
ALTER TABLE "task_tags" DROP CONSTRAINT "task_tags_taskId_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_userId_fkey";

-- DropIndex
DROP INDEX "profiles_bodyPropertiesId_key";

-- DropIndex
DROP INDEX "profiles_userId_key";

-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "activityLevelId",
DROP COLUMN "bodyPropertiesId",
DROP COLUMN "nutritionGoalId",
DROP COLUMN "updatedAt",
ADD COLUMN     "armCircumference" INTEGER NOT NULL,
ADD COLUMN     "chestCircumference" INTEGER NOT NULL,
ADD COLUMN     "currentWeight" INTEGER NOT NULL,
ADD COLUMN     "hipsCircumference" INTEGER NOT NULL,
ADD COLUMN     "targetWeight" INTEGER NOT NULL,
ADD COLUMN     "waistCircumference" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "birthDate",
DROP COLUMN "profilePhotoUrl",
DROP COLUMN "registeredAt",
ADD COLUMN     "photoUrl" TEXT NOT NULL,
ALTER COLUMN "role" DROP DEFAULT,
ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "biography" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL;

-- DropTable
DROP TABLE "ProfileBodyProperties";

-- DropTable
DROP TABLE "activity_levels";

-- DropTable
DROP TABLE "comment_likes";

-- DropTable
DROP TABLE "forum_message_likes";

-- DropTable
DROP TABLE "forum_messages";

-- DropTable
DROP TABLE "forum_subscriptions";

-- DropTable
DROP TABLE "forum_topics";

-- DropTable
DROP TABLE "ingredients";

-- DropTable
DROP TABLE "notifications";

-- DropTable
DROP TABLE "nutrition_goals";

-- DropTable
DROP TABLE "order_ingredients";

-- DropTable
DROP TABLE "order_recipes";

-- DropTable
DROP TABLE "orders";

-- DropTable
DROP TABLE "payment_methods";

-- DropTable
DROP TABLE "recipe_categories";

-- DropTable
DROP TABLE "recipe_comments";

-- DropTable
DROP TABLE "recipe_images";

-- DropTable
DROP TABLE "recipe_ingredients";

-- DropTable
DROP TABLE "recipe_likes";

-- DropTable
DROP TABLE "recipe_steps";

-- DropTable
DROP TABLE "recipe_views";

-- DropTable
DROP TABLE "recipes";

-- DropTable
DROP TABLE "social_links";

-- DropTable
DROP TABLE "task_tag_types";

-- DropTable
DROP TABLE "task_tags";

-- DropTable
DROP TABLE "tasks";

-- DropEnum
DROP TYPE "NotificationType";

-- DropEnum
DROP TYPE "OrderStatus";

-- DropEnum
DROP TYPE "TaskStatus";

-- DropEnum
DROP TYPE "TaskTagTypeEnum";

-- CreateTable
CREATE TABLE "social-networks" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "social-networks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment-methods" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PaymentMethodType" NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment-methods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "social-networks_id_key" ON "social-networks"("id");

-- CreateIndex
CREATE UNIQUE INDEX "payment-methods_id_key" ON "payment-methods"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_id_key" ON "profiles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- AddForeignKey
ALTER TABLE "social-networks" ADD CONSTRAINT "social-networks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment-methods" ADD CONSTRAINT "payment-methods_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
