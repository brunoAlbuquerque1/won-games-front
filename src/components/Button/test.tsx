import { renderWithThem } from "utils/test-utils";
import { screen } from "@testing-library/react";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import Button from ".";

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    const { container } = renderWithThem(<Button>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem",
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the small size", () => {
    renderWithThem(<Button size="small">Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "3rem",
      "font-size": "1.2rem",
    });
  });

  it("should render the large size", () => {
    renderWithThem(<Button size="large">Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "5rem",
      "font-size": "1.6rem",
      padding: "0.8rem 4.8rem",
    });
  });

  it("should render a fullWidth version", () => {
    renderWithThem(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%",
    });
  });

  it("should render an icon version", () => {
    renderWithThem(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    );

    expect(screen.getByText(/buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
