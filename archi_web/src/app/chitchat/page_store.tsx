"use client";
import Image from "next/image";
import Link from "next/link";
export default function Chitchat() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pr-10 pt-10">
      <div className="flex size-full flex-row rounded-tr-xl bg-gradient-to-t from-white via-white lg:bg-none dark:from-black dark:via-black">
        <div className="ml-3 w-32 shrink-0 rounded-t-2xl bg-white">
          상단 네비바{" "}
        </div>

        <div className="w-full items-center justify-start rounded-t-3xl font-mono text-sm lg:flex">
          {/* header */}
          <Link
            href="/"
            className="font flex w-full justify-center text-4xl font-thin lg:static lg:w-auto lg:p-4"
          >
            {" "}
            &lt;{" "}
          </Link>{" "}
          &nbsp;
          <p className="font font-sans text-lg font-bold">Main</p>
        </div>
      </div>

      <div className="flex w-full flex-row">
        <div className="ml-3 w-32 shrink-0 rounded-b-2xl bg-white">
          {" "}
          네비바{" "}
        </div>

        <div className="w-full">
          {" "}
          {/* 메인 컨테이너 */}
          <div className="flex h-72 w-full flex-row">
            <div className="size-80 shrink-0">
              <Image src="/mockup2.svg" alt="archi" width={500} height={500} />
            </div>
            <div className="w-full p-7">
              <h2 className="p-2 font-sans text-xl font-bold">
                Team Archi 의 언어치료 어플리케이션 떠들자
              </h2>
              <p>
                {" "}
                떠들자는 무료 언어치료 어플리케이션으로 표현,어휘력을 향상을
                위해 개발되었습니다.
              </p>
              <p> 정보제공은 덤!</p>
              <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
            </div>
          </div>
          {/* <div className="bg-blue-300 h-60 w-full">section line</div> */}
        </div>
      </div>
    </main>
  );
}
