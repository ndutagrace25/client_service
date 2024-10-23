-- CreateTable
CREATE TABLE "Customer" (
    "uid" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "profile_url" TEXT,
    "company_id" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Business" (
    "uid" TEXT NOT NULL,
    "parent_uid" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "company_id" TEXT,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3),
    "profile_url" TEXT,
    "description" TEXT,
    "website" TEXT,
    "kra_pin" TEXT,
    "modified_by" TEXT,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Customer_Business" (
    "uid" TEXT NOT NULL,
    "customer_uid" TEXT NOT NULL,
    "business_uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3),

    CONSTRAINT "Customer_Business_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- CreateIndex
CREATE INDEX "Business_parent_uid_idx" ON "Business"("parent_uid");

-- AddForeignKey
ALTER TABLE "Customer_Business" ADD CONSTRAINT "Customer_Business_customer_uid_fkey" FOREIGN KEY ("customer_uid") REFERENCES "Customer"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer_Business" ADD CONSTRAINT "Customer_Business_business_uid_fkey" FOREIGN KEY ("business_uid") REFERENCES "Business"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
