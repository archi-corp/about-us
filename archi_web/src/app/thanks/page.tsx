"use client";
import Link from "next/link";
import Image from "next/image";
import Benefactor from "./benefactor";

export default function Thanks() {
  return (
    <main
      className={"flex min-h-screen flex-col items-center justify-center px-24"}
    >
      {/*  fix logo to the top */}
      <div
        className={
          "flex w-full max-w-7xl items-center justify-between font-mono text-sm"
        }
      >
        <Link
          href={"/"}
          className={
            "font left-0 top-0 w-full justify-center text-4xl font-thin lg:static lg:w-auto lg:rounded-xl lg:p-4"
          }
        >
          {" "}
          &lt;{" "}
        </Link>
        &nbsp;
        <Image
          src={"/logo.png"}
          alt={"archi logo"}
          className={"dark:accent-teal-300"}
          width={100}
          height={24}
          priority
        />
      </div>

      <div className={"flex w-full grow flex-col items-center justify-center"}>
        {/* title */}
        <div
          className={
            "z-0 mb-4 flex w-full place-items-center items-center justify-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] lg:mb-12 lg:mb-4 before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"
          }
        >
          <h1
            className={
              "z-10 text-center text-2xl font-semibold sm:mb-3 lg:text-4xl"
            }
          >
            '떠들자' 제작에 도움을 주신 분들께 감사드립니다
          </h1>
        </div>

        {/* 도움 주신분들 grid */}
        <div
          className={
            "flex grid w-full items-center justify-center md:grid-cols-3 lg:max-w-5xl lg:grid-cols-5"
          }
        >
          <Benefactor
            name={"이태경 교수님"}
            description={"성균관대학교 교수님"}
          ></Benefactor>
          <Benefactor name={"주현숙"} description={"언어치료사"}></Benefactor>
          <Benefactor
            name={"홍길동"}
            description={"동에 번쩍 서에 번쩍"}
          ></Benefactor>
          <Benefactor
            name={"홍길동"}
            description={"동에 번쩍 서에 번쩍"}
          ></Benefactor>
          <Benefactor
            name={"홍길동"}
            description={"동에 번쩍 서에 번쩍"}
          ></Benefactor>
          <Benefactor
            name={"홍길동"}
            description={"동에 번쩍 서에 번쩍"}
          ></Benefactor>
          <Benefactor
            name={"홍길동"}
            description={"동에 번쩍 서에 번쩍"}
          ></Benefactor>
          <Benefactor
            name={"홍길동"}
            description={"동에 번쩍 서에 번쩍"}
          ></Benefactor>
          <Benefactor
            name={"홍길동"}
            description={"동에 번쩍 서에 번쩍"}
          ></Benefactor>
          <Benefactor
            name={"홍길동"}
            description={"동에 번쩍 서에 번쩍"}
          ></Benefactor>
        </div>
      </div>
    </main>
  );
}
