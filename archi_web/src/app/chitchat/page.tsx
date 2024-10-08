"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./page.css";
import { FullPageScroll } from "../customComponent/FullPageScroll";
import { AiFillCaretLeft } from "react-icons/ai";

const buttonVariants = {
  hover: { scale: 1.1, color: "#0099A4" },
};

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
            className="fixed flex h-full flex-row rounded-tr-xl bg-none from-white via-white pl-5 dark:from-black dark:via-black">
            <div className="flex w-full items-center justify-start rounded-t-3xl font-mono text-sm">
              <Link
                href="/"
                className="font flex w-full justify-center text-4xl font-thin lg:static lg:w-auto"
              >
                {" "}
                <AiFillCaretLeft className="size-6" />{" "}
              </Link>{" "}
              &nbsp;
            </div>
          </div>

          <div className="flex w-full flex-row">
            <div className="bg w-full p-8">
              {" "}
              {/* 메인 컨테이너 */}
              <div className="size-full lg:flex lg:flex-row">
                <div className="hidden w-8/12 shrink-0 lg:block">
                  <Image
                    src="/mockup2.svg"
                    alt="archi"
                    width={1000}
                    height={500}
                  />
                </div>

                {/* 글 */}
                <div className="z-[-1] pl-20 pt-20 lg:-translate-x-14 lg:translate-y-20 lg:pt-40">
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

                  <div
                    className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-teal-200 after:via-teal-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* inner div2 */}

        <div className="flex h-screen">
          <div className="fixed flex h-full flex-row rounded-tr-xl  bg-none from-white via-white pl-5 dark:from-black dark:via-black">
            <div className="flex w-full items-center justify-start rounded-t-3xl font-mono text-sm">
              <Link
                href="/"
                className="font flex w-full justify-center text-4xl font-thin lg:static lg:w-auto"
              >
                {" "}
                <AiFillCaretLeft className="size-6" />{" "}
              </Link>{" "}
              &nbsp;
            </div>
          </div>

          <div className="flex w-full flex-row">
            <div className="bg w-full p-8">
              {" "}
              {/* 메인 컨테이너 */}
              <div className="size-full lg:flex lg:flex-row">
                <div className="hidden w-8/12 shrink-0 lg:block">
                  <Image
                    src="/mockup2.svg"
                    alt="archi"
                    width={1000}
                    height={500}
                  />
                </div>

                {/* 글 */}
                <div className="z-[-1] pl-20 pt-20 lg:-translate-x-14 lg:translate-y-20 lg:pt-40">
                  <p className="pb-5 font-sans text-xl">

                    <br />{" "}
                    <span className="text-2xl font-semibold">BackGround</span>
                  </p>
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
                  <div
                    className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-teal-200 after:via-teal-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* inner div 3 */}

        <div className="flex h-screen">
          <div
            className="fixed flex h-full flex-row rounded-tr-xl  bg-none from-white via-white pl-5 dark:from-black dark:via-black">
            <div className="w-full items-center justify-start rounded-t-3xl font-mono text-sm lg:flex">
              <Link
                href="/"
                className="font flex w-full justify-center text-4xl font-thin lg:static lg:w-auto"
              >
                {" "}
                <AiFillCaretLeft className="size-6" />{" "}
              </Link>{" "}
              &nbsp;
            </div>
          </div>

          <div className="flex w-full flex-row">
            <div className="bg w-full p-8">
              {" "}
              {/* 메인 컨테이너 */}
              <div className="flex size-full flex-row ">
                <div className="hidden w-8/12 shrink-0 lg:block">
                  <Image
                    src="/mockup2.svg"
                    alt="archi"
                    width={1000}
                    height={500}
                  />
                </div>

                {/* 글 */}
                <div className=" pl-20 pt-20 lg:-translate-x-14 lg:translate-y-20 lg:pt-40">
                  <p className="text-md pb-5 font-sans dark:text-white">
                    <span className=" text-2xl">Tech Stack</span>
                    <br />
                    Just Click for more information
                  </p>

                  <p>
                    <motion.span
                      className={
                        selectedCategory == "client"
                          ? "cursor-pointer text-3xl font-bold text-teal-800"
                          : "cursor-pointer text-xl font-semibold"
                      }
                      onClick={() => handleCategoryClick("client")}
                      variants={buttonVariants}
                      whileHover="hover"
                    >
                      Client
                    </motion.span>
                    <br />
                    <motion.span
                      className={
                        selectedCategory == "server"
                          ? "cursor-pointer text-3xl font-bold text-teal-800"
                          : "cursor-pointer text-xl font-semibold"
                      }
                      onClick={() => handleCategoryClick("server")}
                      variants={buttonVariants}
                      whileHover="hover"
                    >
                      Server
                    </motion.span>
                    <br />
                    <motion.span
                      className={
                        selectedCategory == "ai"
                          ? "cursor-pointer text-3xl font-bold text-teal-800"
                          : "cursor-pointer text-xl font-semibold"
                      }
                      onClick={() => handleCategoryClick("ai")}
                      variants={buttonVariants}
                      whileHover="hover"
                    >
                      AI
                    </motion.span>
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

                  <div
                    className="before:bg-gradient-radial after:bg-gradient-conic relative -z-20 flex place-items-center before:absolute before:h-[100px] before:w-full before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-teal-200 after:via-teal-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullPageScroll>
    </main>
  );
}
