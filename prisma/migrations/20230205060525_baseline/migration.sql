CREATE EXTENSION "uuid-ossp";
-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "username" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "admin" BOOLEAN,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devlog" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "markdown" TEXT,
    "created" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagePath" TEXT,
    "title" TEXT,
    "username" TEXT,

    CONSTRAINT "devlog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
