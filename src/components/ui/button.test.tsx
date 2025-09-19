// src/components/ui/button.test.tsx
// import { render, screen } from "@testing-library/react";
// import { Button } from "./button";

// test("renders button with text", () => {
//   render(<Button>Click me</Button>);
//   expect(screen.getByText("Click me")).toBeInTheDocument();
// });

//snapshot test
import { render } from "@testing-library/react";
import { Button } from "./button";

test("button snapshot", () => {
  const { container } = render(<Button>Click me p</Button>);
  expect(container).toMatchSnapshot();
});
