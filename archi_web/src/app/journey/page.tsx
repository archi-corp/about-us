"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./carousel";
import { useState } from "react";

const slides: SlideDetail[] = [
  {
    title: "새싹 해커톤",
    content:
      "서울 경제 진흥원에서 주최한 새싹 해커톤에 참여하였습니다. 팀원들과 함께 2일동안 열심히 서비스 기획, 구현을 하였습니다. \n\
이를 통해 저희 서비스의 프로토타입이 나왔고, 우수상을 수상하는 성과를 거둘 수 있었습니다.\n\
처음 해커톤에 나와보거나 개발을 하는 사람도 있었고, 서비스 기획을 해본적이 없는 사람도 있었지만, \n\
서로의 장점을 살려 팀워크를 이루어낼 수 있었습니다.",
    img: "/sesac.jpg",
    participants: ["강민석", "박연우", "양성우", "이지훈", "우정균"],
  },
  {
    title: "제주도 워크샵",
    content:
      "해커톤 수상 기념 및 팀 단합과 업무 분담, 인터뷰를 진행하기 위해 2박 3일 제주도로 워크샵을 다녀왔습니다. \n\
같이 여러가지 활동을 하며 팀원들과 더욱 가까워지는 시간을 가졌습니다. 이곳에서 저희 팀은 더욱 더 단단해졌습니다. \n\
또한, 주현숙 심리연구소에서 관련 인터뷰를 진행하였습니다.",
    img: "/jeju.png",
    participants: ["강민석", "박연우", "이지훈", "우정균"],
  },
];

export type SlideDetail = {
  title: string;
  content: string;
  participants: string[];
  img: string;
};

export default function Journey() {
  const [selectedSlide, setSelectedSlide] = useState<SlideDetail>(slides[0]);

  const handleSlideClick = (slide: SlideDetail) => {
    setSelectedSlide(slide);
  };

  return (
    <main className="flex min-h-screen flex-col items-center overscroll-none">
      {/* header */}
      <div className="flex min-w-full items-center justify-between px-40 py-6 font-mono text-sm">
        {/* left */}
        <div className="flex flex-col items-start space-y-1 font-thin">
          {/* top */}
          <div className="flex items-center justify-evenly space-x-2 font-thin">
            {/* backpage < */}
            <Link className="text-3xl" href="/">
              &lt;
            </Link>
            {/* title */}
            <div className="font-sans text-lg font-bold">Journey</div>
          </div>
          {/* bottom */}
          <div className="flex items-center justify-evenly space-x-2 font-thin">
            {/* subtitle */}
            <div className="font-sans text-sm">
              Team Archi의 여정을 소개합니다.
            </div>
          </div>
        </div>
        {/* logo */}
        <div className="flex items-center justify-center bg-transparent">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/archi-corp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*archi logo image*/}
            <Image
              src="/logo-chalk.png"
              alt="archi logo"
              className="dark:accent-teal-300"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      {/* body */}
      <div className="flex w-full flex-col items-center justify-center gap-16 px-1">
        {/* details */}
        {selectedSlide && (
          <div className="flex w-full max-w-7xl flex-row items-start justify-between p-8">
            {/* image */}
            <div className="flex w-full max-w-xl flex-col items-center">
              <div className="relative h-0 w-full pb-[60%]">
                <Image
                  src={selectedSlide.img}
                  alt={selectedSlide.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="flex max-w-xl flex-col items-start justify-center gap-4">
              <h1 className="font-sans text-3xl font-bold">
                {selectedSlide.title}
              </h1>
              <div className="flex flex-row items-start justify-center gap-2">
                {selectedSlide.participants.map((participant) => (
                  <p
                    className="text-xl font-semibold text-gray-500"
                    key={participant}
                  >
                    {participant}
                  </p>
                ))}
              </div>
              <p className="text-xl font-medium">{selectedSlide.content}</p>
            </div>
          </div>
        )}

        {/* slides */}
        <div className="flex w-full flex-col items-center justify-center px-4">
          <div className="mx-auto w-full max-w-7xl">
            <Carousel slides={slides} onSlideClick={handleSlideClick} />
          </div>
        </div>
      </div>
    </main>
  );
}
