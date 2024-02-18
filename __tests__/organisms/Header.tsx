import Header from "@/components/organisms/Header";
import { render, screen } from "@testing-library/react";

describe("Organisms/Header", () => {
  test("로고 클릭", () => {
    render(<Header />);
    const logo: HTMLAnchorElement = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
    expect(logo.href).toMatch(/\/$/);
  });

  test.each([
    { testId: "nav-rlt", pathname: "/level_tests" },
    { testId: "nav-pp", pathname: "/pattern_practice" },
  ])("네비게이션 클릭 (pathname: $pathname)", ({ testId, pathname }) => {
    render(<Header />);
    const el: HTMLAnchorElement = screen.getByTestId(testId);
    const regex = `${pathname}$`;

    expect(el).toBeInTheDocument();
    expect(el.href).toMatch(new RegExp(regex));
  });

  test("로그인 링크 클릭", () => {
    render(<Header />);
    const login: HTMLAnchorElement = screen.getByTestId("link-login");

    expect(login).toBeInTheDocument();
    expect(login.href).toMatch(/\/login$/);
  });
});
