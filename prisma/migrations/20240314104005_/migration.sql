/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL,
    "matricule" INTEGER NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "categorie" VARCHAR(255) NOT NULL,
    "sous_categorie" VARCHAR(255) NOT NULL,
    "machine" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_matricule_key" ON "Users"("matricule");
