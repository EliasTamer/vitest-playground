import { render, screen } from "@testing-library/react";
import ProductList from "../../src/components/ProductList";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";
import { db } from "../mocks/db";

describe("ProductList", () => {
  const productIds: number[] = [];

  // create the products in the db before initializing the tests
  beforeAll(() => {
    [1, 2, 3].forEach(() => {
      const product = db.product.create();
      productIds.push(product.id);
    });
  });

  // cleanup the products after finishing all tests
  afterAll(() => {
    db.product.deleteMany({ where: { id: { in: productIds } } });
  });
  it("should render the list of products", async () => {
    render(<ProductList />);

    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });

  it("should render no products available if no products are found", async () => {
    server.use(http.get("/products", () => HttpResponse.json([])));
    render(<ProductList />);

    const message = await screen.findByText(/no products/i);
    expect(message).toBeInTheDocument();
  });
});
