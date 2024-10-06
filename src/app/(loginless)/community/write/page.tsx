"use client";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import Footer from "@/components/organisms/Footer/Footer";
import CustomBtn from "@/components/atoms/CustomBtn/CustomBtn";
import Link from "next/link";

const BoardWrite = () => {
  const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  const modules = {
    toolbar: [
      [{ header: "1" }],
      [{ font: [] }, { size: [] }],
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
            />
          </div>
          <div className="flex justify-end mt-14">
            <Link href="/community">
              <CustomBtn size={"sm"} type={"deny"} className="my-2">
                글쓰기
              </CustomBtn>
            </Link>
          </div>
        </div>
      </MainSectionWithBothSideAds>
      <Footer />
    </>
  );
};

export default BoardWrite;
