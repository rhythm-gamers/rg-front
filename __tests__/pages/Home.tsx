import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Pages/Home", () => {
  test("Home Images 렌더링 확인", async () => {
    render(<Home />);
    const images = await screen.findAllByRole("img");
    for (let img of images) {
      expect(img).toBeInTheDocument();
    }
  });
});
