-- CreateTable
CREATE TABLE "recipe_views" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "recept_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recipe_views_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recipe_views_id_key" ON "recipe_views"("id");

-- AddForeignKey
ALTER TABLE "recipe_views" ADD CONSTRAINT "recipe_views_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_views" ADD CONSTRAINT "recipe_views_recept_id_fkey" FOREIGN KEY ("recept_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
