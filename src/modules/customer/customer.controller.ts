import { Response, Request } from "express";
import { getAllCustomers } from "./customer.service";

const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await getAllCustomers();

    return res.status(200).json({
      success: true,
      customers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to fetch customers",
    });
  }
};

export { getCustomers };
