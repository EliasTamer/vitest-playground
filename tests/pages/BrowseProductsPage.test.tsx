import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { http, delay, HttpResponse } from "msw";
import { server } from "../mocks/server";
import BrowseProducts from "../../src/pages/BrowseProductsPage";
import { Theme } from "@radix-ui/themes";

describe("BrowseProductsPage", () => {
  const renderComponent = () => {
    render(
      <Theme>
        <BrowseProducts />
      </Theme>
    );
  };
  it("should show a loading skeleton categories", () => {
    server.use(
      http.get("/categories", async () => {
        await delay();
        return HttpResponse.json([]);
      })
    );

    renderComponent();

    expect(
      screen.getByRole("progressbar", { name: /categories/i })
    ).toBeInTheDocument();
  });

  it("should show a loading skeleton when fetching products", () => {
    server.use(
      http.get("/products", async () => {
        await delay();
        return HttpResponse.json([]);
      })
    );

    renderComponent();

    expect(
      screen.getByRole("progressbar", { name: /products/i })
    ).toBeInTheDocument();
  });

  it("should hide the loading skeletons after categories are fetched ", async () => {
    renderComponent();

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("progressbar", { name: /categories/i })
    );
  });

  it("should hide the loading skeletons after products are fetched ", async () => {
    renderComponent();

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("progressbar", { name: /products/i })
    );
  });
});
