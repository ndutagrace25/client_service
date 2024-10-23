import { createCustomer, getAllCustomers } from "./customer.service";

describe("Customer Service", () => {
  it("should create a new customer", async () => {
    const customer = await createCustomer({
      email: "test@example.com",
      first_name: "Test",
      last_name: "User",
      status: "Active",
      phone: "+254708807403",
    });
    expect(customer).toHaveProperty("uid");
    expect(customer.email).toBe("test@example.com");
  });

  it("should retrieve all customers", async () => {
    await createCustomer({
      email: "user1@example.com",
      first_name: "User",
      last_name: "One",
      status: "Active",
      phone: "+254708807401",
    });
    await createCustomer({
      email: "user2@example.com",
      first_name: "User",
      last_name: "Two",
      status: "Active",
      phone: "+254708807402",
    });

    const customers = await getAllCustomers();
    expect(customers.length).toBe(2);
  });
});
