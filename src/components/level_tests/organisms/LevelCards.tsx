"use client";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import LevelCard from "../molecules/LevelCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbHandClick } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const LevelCards = () => {
  const sliderRef = useRef<Slider>(null);
  const currentIdx = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const router = useRouter();

  const navigateToLevelTestByKeyboard = (e: KeyboardEvent) => {
    e.preventDefault();
    if (isDragging) return;
    if (e.key === "Enter") {
      router.push(`/level_tests/${currentIdx.current}`);
    }
  };

  const settings = {
    infinite: true,
    arrows: false,
    centerPadding: "120px",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
    lazyLoading: "ondemand",
    onInit: () => {
      const focusTarget = sliderRef.current?.innerSlider?.list?.childNodes[0]
        .childNodes[4] as HTMLDivElement;
      focusTarget?.focus();
    },
    beforeChange: (oldIdx: number, newIdx: number) => {
      setIsDragging(true);
      if (Math.abs(newIdx - oldIdx) > 1) return;
      const target = sliderRef.current?.innerSlider?.list?.querySelector(
        `[data-index='${newIdx}']`,
      )?.firstChild?.firstChild as HTMLDivElement;
      target?.focus();
      currentIdx.current = newIdx + 1;
    },
    afterChange: (newIdx: number) => {
      if (newIdx !== 0 && newIdx !== 5) return;
      const target = sliderRef.current?.innerSlider?.list?.querySelector(
        `[data-index='${newIdx > 0 ? 5 : 0}']`,
      )?.firstChild?.firstChild as HTMLDivElement;
      target?.focus();
      setIsDragging(false);
    },
  };

  useEffect(() => {
    const slider =
      sliderRef.current?.innerSlider?.list?.childNodes[0].childNodes[4];
    slider?.addEventListener("keydown", (e) =>
      navigateToLevelTestByKeyboard(e as KeyboardEvent),
    );
    return () => {
      slider?.removeEventListener("keydown", (e) =>
        navigateToLevelTestByKeyboard(e as KeyboardEvent),
      );
    };
  }, []);

  return (
    <div className="flex w-full h-full justify-evenly items-center relative">
      <Slider
        ref={sliderRef}
        className="w-[90dvw] h-full bg-transparent z-50"
        {...settings}
      >
        {[0, 1, 2, 3, 4, 5].map((value) => (
          <LevelCard key={value} level={value} isDragging={isDragging} />
        ))}
      </Slider>
      <div className="flex flex-col items-center gap-3 absolute bottom-8 mx-auto text-rose-400">
        <div className="flex justify-between w-[30dvw]">
          <div className="flex items-center animate-leftDrag">
            <MdArrowBackIos className="text-rose-300" size={30} />
            <MdArrowBackIos className="text-rose-200" size={30} />
            <MdArrowBackIos className="text-rose-100" size={30} />
          </div>
          <TbHandClick className="animate-clickAndDrag" size={55} />
          <div className="flex items-center animate-rightDrag">
            <MdArrowForwardIos className="text-rose-100" size={30} />
            <MdArrowForwardIos className="text-rose-200" size={30} />
            <MdArrowForwardIos className="text-rose-300" size={30} />
          </div>
        </div>
        <p className="text-lg">좌우로 스크롤하세요!</p>
        <p className="text-black">Tip: 방향키로도 이동 가능해요.</p>
      </div>
    </div>
  );
};

export default LevelCards;
