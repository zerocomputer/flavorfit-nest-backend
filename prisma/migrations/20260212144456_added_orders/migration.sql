-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PROCESSING', 'COOKING', 'DELIVERY', 'FINISH');

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "courier_id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PROCESSING',
    "delivery_to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "closed_at" TIMESTAMP(3),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderRecipe" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "recipe_id" TEXT NOT NULL,
    "units" INTEGER NOT NULL,
    "costPerUnit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "OrderRecipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderIngredient" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "ingredient_id" TEXT NOT NULL,
    "units" DOUBLE PRECISION NOT NULL,
    "costPerUnit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "OrderIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "orders_id_key" ON "orders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderRecipe_id_key" ON "OrderRecipe"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderIngredient_id_key" ON "OrderIngredient"("id");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_courier_id_fkey" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderRecipe" ADD CONSTRAINT "OrderRecipe_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderRecipe" ADD CONSTRAINT "OrderRecipe_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderIngredient" ADD CONSTRAINT "OrderIngredient_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderIngredient" ADD CONSTRAINT "OrderIngredient_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
