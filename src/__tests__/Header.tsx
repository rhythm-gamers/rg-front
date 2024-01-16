import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("Organisms/Header", () => {
  test("로고 클릭", () => {
    render(<App />, { wrapper: BrowserRouter });
    const logo: HTMLAnchorElement = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
    fireEvent.click(logo);

    expect(window.location.pathname).toContain("/");
  });

  test.each([
    { testId: "nav-rlt", pathname: "/rhythm_level_tests" },
    { testId: "nav-pp", pathname: "/pattern_practice" },
  ])("네비게이션 클릭 (pathname: $pathname)", ({ testId, pathname }) => {
    render(<App />, { wrapper: BrowserRouter });
    const el: HTMLAnchorElement = screen.getByTestId(testId);

    expect(el).toBeInTheDocument();
    fireEvent.click(el);
    expect(window.location.pathname).toContain(pathname);
  });

  test("로그인 링크 클릭", () => {
    render(<App />, { wrapper: BrowserRouter });
    const login: HTMLAnchorElement = screen.getByTestId("link-login");
    expect(login).toBeInTheDocument();
    // 추후 실제 url로 수정
    expect(window.location.pathname).toContain("/");
  });
});
