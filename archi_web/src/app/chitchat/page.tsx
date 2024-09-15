"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import "./page.css";
import { FullPageScroll } from "../customComponent/FullPageScroll";
import { AiFillCaretLeft } from "react-icons/ai";

export default function Chitchat() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const [client, setClient] = useState([
    "React Native",
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Zustand",
    "styled-components",
    "...etc",
  ]);
  const [server, setServer] = useState(["Django", "Django Rest Framework"]);
  const [ai, setAi] = useState(["Tensorflow", "Keras", "Python"]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      return;
    }
    setSelectedCategory(category);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overscroll-none">
      <FullPageScroll>
        {/* inner div 1 */}
        <div className="flex h-screen">
          <div
            // data-aos="fade-zoom-in"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-back"
            // data-aos-offset="400"
            className="fixed flex h-full flex-row rounded-tr-xl bg-gradient-to-t from-white via-white pl-12 lg:bg-none dark:from-black dark:via-black"
          >
            <div className="w-full items-center justify-start rounded-tl-3xl rounded-tr-3xl font-mono text-sm lg:flex">
              <Link
                href="/"
                className="font flex w-full justify-center text-4xl font-thin lg:static lg:w-auto"
              >
                {" "}
                <AiFillCaretLeft className="h-6 w-6" />{" "}
              </Link>{" "}
              &nbsp;
            </div>
          </div>

          <div
            // data-aos="fade-zoom-in"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-back"
            // data-aos-offset="400"
            className="flex w-full flex-row"
          >
            <div className="bg w-full p-8 pt-8">
              {" "}
              {/* 메인 컨테이너 */}
              <div className="flex h-full w-full flex-row">
                <div className="w-8/12 flex-shrink-0">
                  <Image
                    src="/mockup2.svg"
                    alt="archi"
                    width={1000}
                    height={500}
                  />
                </div>

                {/* 글 */}
                <div className="z-[-1] -translate-x-14 translate-y-20 pt-40">
                  <p className="pb-5 font-sans text-xl">
                    Team Archi 의 언어치료 어플리케이션
                    <br />{" "}
                    <span className="text-2xl font-semibold">떠들자</span>
                  </p>
                  <p>
                    {" "}
                    떠들자는 언어치료 앱으로서 언어 발달이 늦은 모든 분들을 위한
                    표현,어휘력 향상을 위해 만들어 졌습니다.
                  </p>
                  <p>
                    <br /> 더불어, 도움이 되는 다양한 정보를 제공합니다.
                  </p>
                  <p className="text-xs font-semibold">
                    <br /> 12월중 베타 테스트 예정.
                  </p>

                  <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-teal-200 after:via-teal-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
                </div>
              </div>
              {/* <div className="bg-teal-300 h-60 w-full">section line</div> */}
            </div>
          </div>
        </div>
        {/* inner div2 */}

        <div className="flex h-screen">
          <div
            // data-aos="fade-zoom-in"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-back"
            // data-aos-offset="400"
            className="fixed flex h-full flex-row rounded-tr-xl bg-gradient-to-t from-white via-white pl-12 lg:bg-none dark:from-black dark:via-black"
          >
            <div className="w-full items-center justify-start rounded-tl-3xl rounded-tr-3xl font-mono text-sm lg:flex">
              <Link
                href="/"
                className="font flex w-full justify-center text-4xl font-thin lg:static lg:w-auto"
              >
                {" "}
                <AiFillCaretLeft className="h-6 w-6" />{" "}
              </Link>{" "}
              &nbsp;
            </div>
          </div>

          <div
            // data-aos="fade-zoom-in"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-back"
            // data-aos-offset="400"
            className="flex w-full flex-row"
          >
            <div className="bg w-full p-8 pt-8">
              {" "}
              {/* 메인 컨테이너 */}
              <div className="flex h-full w-full flex-row">
                <div className="w-8/12 flex-shrink-0">
                  <Image
                    src="/mockup2.svg"
                    alt="archi"
                    width={1000}
                    height={500}
                  />
                </div>

                {/* 글 */}
                <div className="z-[-1] -translate-x-14 translate-y-20 pt-40">
                  <p className="font-sans text-2xl">BackGround</p>

                  <p className="pt-5">
                    {" "}
                    늘어나는 맞벌이 가정, 코로나19 로 인해 언어장애 사람들이
                    매년 증가하고 있습니다.
                    <br />
                    <br />
                    떠들자는 부담스러운 치료비, 접근성이 떨어지는 정보들로
                    하여금 피해를 보는 사람들을 줄이고자 합니다.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p className="text-xs font-semibold">
                    <br /> 12월중 베타 테스트 예정.
                  </p>
                  <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-teal-200 after:via-teal-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
                </div>
              </div>
              {/* <div className="bg-teal-300 h-60 w-full">section line</div> */}
            </div>
          </div>
        </div>
        {/* inner div 3 */}

        <div className="flex h-screen">
          <div
            // data-aos="fade-zoom-in"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-back"
            // data-aos-offset="400"
            className="fixed flex h-full flex-row rounded-tr-xl bg-gradient-to-t from-white via-white pl-12 lg:bg-none dark:from-black dark:via-black"
          >
            <div className="w-full items-center justify-start rounded-tl-3xl rounded-tr-3xl font-mono text-sm lg:flex">
              <Link
                href="/"
                className="font flex w-full justify-center text-4xl font-thin lg:static lg:w-auto"
              >
                {" "}
                <AiFillCaretLeft className="h-6 w-6" />{" "}
              </Link>{" "}
              &nbsp;
            </div>
          </div>

          <div
            // data-aos="fade-zoom-in"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-back"
            // data-aos-offset="400"
            className="flex w-full flex-row"
          >
            <div className="bg w-full p-8 pt-8">
              {" "}
              {/* 메인 컨테이너 */}
              <div className="flex h-full w-full flex-row">
                <div className="w-8/12 flex-shrink-0">
                  <Image
                    src="/mockup2.svg"
                    alt="archi"
                    width={1000}
                    height={500}
                  />
                </div>

                {/* 글 */}
                <div className="-translate-x-14 translate-y-20 pt-40">
                  <p className="text-md pb-5 font-sans">
                    <span className="text-2xl">Tech Stack</span>
                    <br />
                    Just Click for more information
                  </p>

                  <p>
                    <span
                      className={
                        selectedCategory == "client"
                          ? "cursor-pointer text-3xl font-bold text-teal-800"
                          : "cursor-pointer text-xl font-semibold"
                      }
                      onClick={() => handleCategoryClick("client")}
                    >
                      Client
                    </span>
                    <br />
                    <span
                      className={
                        selectedCategory == "server"
                          ? "cursor-pointer text-3xl font-bold text-teal-800"
                          : "cursor-pointer text-xl font-semibold"
                      }
                      onClick={() => handleCategoryClick("server")}
                    >
                      Server
                    </span>
                    <br />
                    <span
                      className={
                        selectedCategory == "ai"
                          ? "cursor-pointer text-3xl font-bold text-teal-800"
                          : "cursor-pointer text-xl font-semibold"
                      }
                      onClick={() => handleCategoryClick("ai")}
                    >
                      AI
                    </span>
                    <br />
                  </p>

                  {selectedCategory === "client" && (
                    <div className="mt-4">
                      {client.map((item, index) => (
                        <p key={index} className="text-lg">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                  {selectedCategory === "server" && (
                    <div className="mt-4">
                      {server.map((item, index) => (
                        <p key={index} className="text-lg">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                  {selectedCategory === "ai" && (
                    <div className="mt-4">
                      {ai.map((item, index) => (
                        <p key={index} className="text-lg">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}

                  <p className="text-xs font-semibold">
                    <br /> 12월중 베타 테스트 예정.
                  </p>

                  <div className="relative z-[-20] flex place-items-center before:absolute before:h-[100px] before:w-full before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-teal-200 after:via-teal-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
                </div>
              </div>
              {/* <div className="bg-teal-300 h-60 w-full">section line</div> */}
            </div>
          </div>
        </div>
      </FullPageScroll>
    </main>
  );
}
