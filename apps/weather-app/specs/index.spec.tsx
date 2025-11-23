import React from "react";
import { render } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("should render successfully", async () => {
    const PageComponent = await Page();
    const { baseElement } = render(PageComponent);
    expect(baseElement).toBeTruthy();
  });
});
