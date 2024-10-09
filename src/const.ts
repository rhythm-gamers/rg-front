// Redux Store Version
export const CURRENT_STORE_VERSION = "v0.1.0";

// metadata
export const META = {
  title: "리듬게이머즈: 모두의 리듬게임 길잡이",
  siteName: "리듬게이머즈",
  description:
    "리듬게임을 체험해보고 싶으신가요? 각종 패턴을 연습하고 싶으신가요? 리듬게이머스에서 도와드릴게요!",
  keyword: [
    "리듬게이머즈",
    "rhythmgamers",
    "리듬게임",
    "리듬게임 체험",
    "패턴 연습",
    "리듬게임 용어집",
    "리듬게임 게시판",
    "리듬게임 패턴 연습",
    "리듬게임 레벨 테스트",
  ],
  url: "https://rhythm-gamers.com",
  ogImage: "/opengraph-image.png",
} as const;

// Link Name
export const LINK_PP = "/pattern_practice";
export const LINK_RLT = "/level_tests";
export const LINK_WIKI = "/wiki";
export const LINK_COMMUNITY = "/community";
export const LINK_LOGIN = "/login";
export const LINK_MYPAGE = "/my_page";

// Verification Regex
export const notIncludeSpace = /\s/g;
export const notIncludeSpecialChar = /[~!@#$%";'^,&*()_+|</>=>`?:{[\}]/g;
