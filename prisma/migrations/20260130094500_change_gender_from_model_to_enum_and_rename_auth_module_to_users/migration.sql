/*
  Warnings:

  - You are about to drop the `genders` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MAN', 'WOMAN');

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_genderId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "gender" "Gender";

-- DropTable
DROP TABLE "genders";
