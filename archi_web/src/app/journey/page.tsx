import Image from "next/image";
import Link from "next/link";
import Slide from "./slide";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "./carousel";

const slides = [
  {
    title: "팀 빌딩",
    subtitle:
      "서울시 경제진흥원에서 주최한 새싹 해커톤에 참여하였습니다. 여기서 우수상을 수상하였고, 이를 계기로 배포를 목표로 개발을 시작했습니다.",
    img: "/sesac.jpg",
  },
  {
    title: "SeSAC 해커톤",
    subtitle:
      "서울시 경제진흥원에서 주최한 새싹 해커톤에 참여하였습니다. 여기서 우수상을 수상하였고, 이를 계기로 배포를 목표로 개발을 시작했습니다.",
    img: "/sesac.jpg",
  },
  {
    title: "제주도 워크샵",
    subtitle:
      "서울시 경제진흥원에서 주최한 새싹 해커톤에 참여하였습니다. 여기서 우수상을 수상하였고, 이를 계기로 배포를 목표로 개발을 시작했습니다.",
    img: "/sesac.jpg",
  },
  {
    title: "제주도 워크샵",
    subtitle:
      "서울시 경제진흥원에서 주최한 새싹 해커톤에 참여하였습니다. 여기서 우수상을 수상하였고, 이를 계기로 배포를 목표로 개발을 시작했습니다.",
    img: "/sesac.jpg",
  },
  {
    title: "제주도 워크샵",
    subtitle:
      "서울시 경제진흥원에서 주최한 새싹 해커톤에 참여하였습니다. 여기서 우수상을 수상하였고, 이를 계기로 배포를 목표로 개발을 시작했습니다.",
    img: "/sesac.jpg",
  },
  {
    title: "제주도 워크샵",
    subtitle:
      "서울시 경제진흥원에서 주최한 새싹 해커톤에 참여하였습니다. 여기서 우수상을 수상하였고, 이를 계기로 배포를 목표로 개발을 시작했습니다.",
    img: "/sesac.jpg",
  },
  {
    title: "제주도 워크샵",
    subtitle:
      "서울시 경제진흥원에서 주최한 새싹 해커톤에 참여하였습니다. 여기서 우수상을 수상하였고, 이를 계기로 배포를 목표로 개발을 시작했습니다.",
    img: "/sesac.jpg",
  },
];

export default function Journey() {
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
            <div className="text-lg">Journey</div>
          </div>
          {/* bottom */}
          <div className="flex items-center justify-evenly space-x-2 font-thin">
            {/* subtitle */}
            <div className="font-mono text-sm">
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
      <div className="flex w-full flex-col items-center justify-center px-1">
        {/* details */}
        <div className="flex flex-row"></div>
        {/* slides */}
        <div className="flex w-full flex-col items-center justify-center px-4">
          <div className="mx-auto w-full max-w-7xl">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
    </main>
  );
}
