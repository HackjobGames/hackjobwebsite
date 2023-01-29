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
