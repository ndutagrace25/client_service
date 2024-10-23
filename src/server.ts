import prisma from "./shared/prismaClient";
import app from "./index";
import logging from "npmlog";

const PORT = process.env.PORT || 2024;

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    logging.info(`Server is running on port ${PORT}`, ``);
  } catch (error) {
    logging.error("Error connecting to the database", error);
    process.exit(1);
  }
});

// handle gracefull shutdown
process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
