import Header from "@/components/organisms/Header";
import { makeStore } from "@/lib/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import {
  LINK_COMMUNITY,
  LINK_LOGIN,
  LINK_PP,
  LINK_RLT,
  LINK_WIKI,
} from "../../src/const";

jest.mock("next/navigation");

const router = {
  push: jest.fn(),
};
router.push.mockImplementation((pathname: string) => pathname);

describe("Organisms/Header", () => {
  test("로고 클릭", () => {
    render(
      <Provider store={makeStore()}>
        <Header />
      </Provider>,
    );
    const logo: HTMLButtonElement = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });

  test.each([
    { testId: "link-rlt", href: "/level_tests", constants: LINK_RLT },
    { testId: "link-pp", href: "/pattern_practice", constants: LINK_PP },
    { testId: "link-wiki", href: "/wiki", constants: LINK_WIKI },
    { testId: "link-community", href: "/community", constants: LINK_COMMUNITY },
  ])("네비게이션 클릭 (pathname: $href)", ({ testId, href, constants }) => {
    render(
      <Provider store={makeStore()}>
        <Header />
      </Provider>,
    );
    const el: HTMLButtonElement = screen.getByTestId(testId);

    expect(el).toBeInTheDocument();
    expect(router.push(constants)).toMatch(href);
  });

  test("로그인 링크 클릭", () => {
    render(
      <Provider store={makeStore()}>
        <Header />
      </Provider>,
    );
    const login: HTMLButtonElement = screen.getByTestId("link-login");

    expect(login).toBeInTheDocument();
    expect(router.push(LINK_LOGIN)).toMatch("/login");
  });
});
