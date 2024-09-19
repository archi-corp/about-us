"use client";
import Link from "next/link";
import Image from "next/image";

export default function Rachel() {
  return (
    <main
      className={"flex min-h-screen flex-col items-center justify-center p-24"}
    >
      {/*  Fix logo and back button to the top */}
      <div
        className={
          "z-10 flex w-full max-w-7xl items-center justify-between font-mono text-sm"
        }
      >
        <Link
          href={"/archi"}
          className={
            "font left-0 top-0 flex w-full justify-center text-4xl font-thin lg:static lg:w-auto lg:rounded-xl lg:p-4"
          }
        >
          {" "}
          &lt;{" "}
        </Link>{" "}
        &nbsp;
        <Image
          src={"/logo-chalk.png"}
          alt={"archi logo"}
          width={100}
          height={24}
          priority
        ></Image>
      </div>

      {/* Name and Information Section */}
      <div className={"flex w-full grow items-center justify-items-start"}>
        {/*  Name Tag */}
        <div
          className={"group rounded-lg px-5 py-4"}
          rel={"noopener noreferrer"}
        >
          <Image
            src={"/profile_images/rachel.jpg"}
            alt={"박연우"}
            className={
              "mx-auto mb-5 rounded-full object-cover sm:size-24 lg:mx-0 lg:size-32 lg:items-start"
            }
            width={100}
            height={100}
          ></Image>
          <p className={"m-0 max-w-3xl text-sm opacity-50"}></p>
          <h2 className={"mb-3 text-2xl font-semibold"}>
            박연우
          </h2>
          <p className={"m-0 max-w-[30ch] text-sm opacity-50"}>
            Project Manager
            <br /> Backend Developer <br /> Frontend Developer
          </p>
        </div>
        <div
            className={"flex flex-col justify-left items-start mx-32 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"}>
          <h1 className={"text-center text-2xl font-semibold mb-3 lg:text-4xl"}>
            Hello, I'm rachel
          </h1>
          <p className={"max-w-4xl text-sm opacity-80"}>
            여기서부터 저의 자기소개를 주저리주저리 적으면 좋지 않을까요. 저는 성균관대학교 시스템경영공학과 및 소프트웨어학과에 재학중인 박연우라고 합니다. 아르키에서 프로젝트 매니저로 아르키의 전반적인
            어쩌고 저쩌고 다양한 일들을 도맡아 하고 있습니다. 관심사는 뭐.. 움 만들어가는중... archi에게 많은 사랑과 관심을 주세요..!!
          </p>

          <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://github.com/racheliee"
              target="_blank"
              rel="noopener noreferrer"
          >
            <p className={"max-w-4xl text-sm opacity-90"}>
              github
            </p>
          </a>

          <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://www.linkedin.com/in/racheliee/"
              target="_blank"
              rel="noopener noreferrer"
          >
            <p className={"max-w-4xl text-sm opacity-90"}>
              linkedin
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
