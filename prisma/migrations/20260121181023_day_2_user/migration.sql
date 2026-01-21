-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "bio" TEXT NOT NULL,
    "growth" INTEGER NOT NULL,
    "current_weight" INTEGER NOT NULL,
    "desired_weight" INTEGER NOT NULL,
    "waist_circumference" INTEGER NOT NULL,
    "chest_weight" INTEGER NOT NULL,
    "thight_circumference" INTEGER NOT NULL,
    "arm_circumference" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
