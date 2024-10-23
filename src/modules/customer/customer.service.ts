import prisma from "../../shared/prismaClient";
import { Customer } from "./customer.types";

export const createCustomer = async (data: Customer) => {
  return await prisma.customer.create({
    data,
  });
};

export const getAllCustomers = async () => {
  return await prisma.customer.findMany();
};
