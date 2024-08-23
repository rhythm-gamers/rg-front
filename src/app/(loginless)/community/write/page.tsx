"use client";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";

const BoardWrite = () => {
  const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
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
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <MainSectionWithBothSideAds sectionTitle="자유 게시판">
      <div className="mx-auto w-[900px]">
        <div>
          <div className="flex justify-between">
            <div>
              <span>작성자</span>
            </div>
            <div>
              <span>조회수: 0</span>
              {" | "}
              <span>추천: 0</span>
              {" | "}
              <span>2024-08-22</span>
            </div>
          </div>
        </div>
        <hr className="mt-2 mb-5 border-black" />
        <div className="leading-relaxed">
          <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
        </div>
      </div>
    </MainSectionWithBothSideAds>
  );
};

export default BoardWrite;
