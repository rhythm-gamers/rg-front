"use client";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import Footer from "@/components/organisms/Footer/Footer";
import CustomBtn from "@/components/atoms/CustomBtn/CustomBtn";
import PostAPI from "@/api/post";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { LINK_COMMUNITY } from "@/const";

/**
 *  [게시판 폰트 추가 방법]
 *  1. app/fonts.ts => 로컬 or 구글 폰트 추가
 *  2. app/layout.ts => 폰트의 CSS variable을 html className에 추가
 *  3. app/globals.css에서 다른 폰트의 CSS를 보고, CSS 추가
 *  4. app/globals.css의 .ql-font-{fontName}의 fontName 부분을 아래 리스트에 추가
 */
const FONT_LIST = ["Pretendard", "Gyeonggi"];

const BoardWrite = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const QuillNoSSRWrapper = useCallback(
    dynamic(
      async () => {
        const reactQuill = await import("react-quill");
        const Quill = reactQuill.default.Quill;

        const Font = Quill.import("formats/font") as { whitelist: string[] };
        Font.whitelist = FONT_LIST;

        Quill.register(Font, true);
        return reactQuill;
      },
      {
        ssr: false,
        loading: () => <p>Loading ...</p>,
      },
    ),
    [],
  );
  const modules = {
    toolbar: [
      [{ header: "1" }],
      [{ font: FONT_LIST }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      ["link", "image", "video"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "link",
    "image",
    "video",
  ];

  const createPost = async (title: string, content: string) => {
    await PostAPI.create({
      title: title,
      content: content,
      boardName: "자유게시판",
    });

    router.replace(`${LINK_COMMUNITY}?page=1`);
  };

  return (
    <>
      <MainSectionWithBothSideAds sectionTitle="자유 게시판">
        <div className="mx-auto w-[900px]">
          <div>
            <div className="flex justify-between">
              <div className="w-full">
                <span>작성자</span>
                <div>
                  <textarea
                    rows={1}
                    className="w-full mt-2 p-3 resize-none border border-gray-300"
                    placeholder="제목을 입력해주세요"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-2 mb-5 border-black" />
          <div className="leading-relaxed h-[500px]">
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              className="h-full"
              placeholder="내용을 입력해주세요"
              onChange={setContent}
            />
          </div>
          <div className="flex justify-end mt-14">
            <CustomBtn
              size={"sm"}
              type={"deny"}
              className="my-2"
              onClick={() => {
                createPost(title, content);
              }}
            >
              글쓰기
            </CustomBtn>
          </div>
        </div>
      </MainSectionWithBothSideAds>
      <Footer />
    </>
  );
};

export default BoardWrite;
