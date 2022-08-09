-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MALE', 'FEMALE', 'OTHERE');

-- CreateEnum
CREATE TYPE "LIFF_APP_TYPE" AS ENUM ('Full', 'Tall', 'Compact');

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT 'init',
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "stripeCustomerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" TIMESTAMP(3),

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineProvider" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "LineProvider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineChannel" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "channelSecret" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "channelExpire" TIMESTAMP(3) NOT NULL,
    "lineProviderId" INTEGER NOT NULL,

    CONSTRAINT "LineChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiffChannel" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "channelSecret" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "channelExpire" TIMESTAMP(3) NOT NULL,
    "lineProviderId" INTEGER NOT NULL,

    CONSTRAINT "LiffChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiffApp" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "liffId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "endpointUrl" TEXT NOT NULL,
    "size" "LIFF_APP_TYPE" NOT NULL,
    "liffChannelId" INTEGER NOT NULL,

    CONSTRAINT "LiffApp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineUser" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "lineId" TEXT NOT NULL,
    "lineName" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "language" TEXT NOT NULL,
    "lineImage" TEXT,
    "statusMessage" TEXT,
    "stripeCustomerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" TIMESTAMP(3),
    "clientId" INTEGER NOT NULL,
    "lineProviderId" INTEGER NOT NULL,

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
    "postCode" TEXT NOT NULL,
    "adminMemo" TEXT NOT NULL,
    "userMemo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" TIMESTAMP(3),
    "lineUserId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_uuid_key" ON "Client"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LineProvider_uuid_key" ON "LineProvider"("uuid");

-- CreateIndex
CREATE INDEX "LineProvider_clientId_idx" ON "LineProvider"("clientId");

-- CreateIndex
CREATE INDEX "LineProvider_uuid_idx" ON "LineProvider"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LineChannel_uuid_key" ON "LineChannel"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LiffChannel_uuid_key" ON "LiffChannel"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LiffApp_uuid_key" ON "LiffApp"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LineUser_uuid_key" ON "LineUser"("uuid");

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
ALTER TABLE "LineProvider" ADD CONSTRAINT "LineProvider_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineChannel" ADD CONSTRAINT "LineChannel_lineProviderId_fkey" FOREIGN KEY ("lineProviderId") REFERENCES "LineProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiffChannel" ADD CONSTRAINT "LiffChannel_lineProviderId_fkey" FOREIGN KEY ("lineProviderId") REFERENCES "LineProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiffApp" ADD CONSTRAINT "LiffApp_liffChannelId_fkey" FOREIGN KEY ("liffChannelId") REFERENCES "LiffChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineUser" ADD CONSTRAINT "LineUser_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineUser" ADD CONSTRAINT "LineUser_lineProviderId_fkey" FOREIGN KEY ("lineProviderId") REFERENCES "LineProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_lineUserId_fkey" FOREIGN KEY ("lineUserId") REFERENCES "LineUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
