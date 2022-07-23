-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MALE', 'FEMALE', 'OTHERE');

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT 'init',
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "stripeCustomerid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" TIMESTAMP(3),

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineUser" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "lineId" TEXT NOT NULL,
    "lineName" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "language" TEXT NOT NULL,
    "lineImage" TEXT NOT NULL,
    "statusMessage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" TIMESTAMP(3),
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "LineUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "name" TEXT NOT NULL,
    "nameKana" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "gender" "GENDER" NOT NULL,
    "bio" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "address3" TEXT NOT NULL,
    "post_code" TEXT NOT NULL,
    "adminMemo" TEXT NOT NULL,
    "userMemo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" TIMESTAMP(3),
    "lineUserId" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "LineUser_clientId_idx" ON "LineUser"("clientId");

-- CreateIndex
CREATE INDEX "LineUser_lineId_idx" ON "LineUser"("lineId");

-- CreateIndex
CREATE INDEX "LineUser_uuid_idx" ON "LineUser"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LineUser_clientId_lineId_key" ON "LineUser"("clientId", "lineId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_lineUserId_key" ON "Profile"("lineUserId");

-- CreateIndex
CREATE INDEX "Profile_lineUserId_idx" ON "Profile"("lineUserId");

-- AddForeignKey
ALTER TABLE "LineUser" ADD CONSTRAINT "LineUser_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_lineUserId_fkey" FOREIGN KEY ("lineUserId") REFERENCES "LineUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
