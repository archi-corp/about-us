"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const linkVariants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-16 pr-16 pt-10">
      <div className="z-10 w-full max-w-5xl flex-grow items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center text-pretty font-medium lg:static lg:w-auto lg:rounded-xl">
          archichatco@gmail.com &nbsp;
        </p>
        <div className="flex48 fixed bottom-0 left-0 w-full items-end justify-center bg-gradient-to-t from-white via-white text-xl font-semibold lg:static lg:size-auto lg:bg-none dark:from-black dark:via-black">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team Archi{" "}
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="z-0 m-0 flex h-full w-full flex-grow flex-row">
        <div className="z-[-1] flex h-full w-8/12 -translate-y-20 place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-slate-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-teal-200 after:via-teal-300 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-teal-900 after:dark:via-[#318284] after:dark:opacity-40">
          <Image
            className="z-0 hidden sm:block md:block"
            src="/mockup.png"
            alt="mockup pic"
            width={3400}
            height={3000}
            priority
          />
        </div>

        <div className="relative z-[-1] flex w-3/5 place-items-start pl-4 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-slate-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-teal-200 after:via-teal-300 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-teal-900 after:dark:via-[#318284] after:dark:opacity-40">
          <div className="flex flex-col">
            <div className="z-10 pb-4 text-4xl font-semibold sm:mt-0 lg:mt-40">
              떠들자{" "}
              <span className="pl-4 text-base font-medium"> by Archi</span>
            </div>
            <div className="z-10 mt-3 hidden text-2xl font-semibold sm:block">
              언어발달장애를 지닌 모든 사람들을 위한
              <br /> AI-언어발달지도사.
            </div>
            <div className="z-10 mt-10 hidden font-sans sm:block">
              <span className="font-bold">떠들자</span>는 언어발달장애를 가진
              아동들을 위한 <br />
              AI 기반 언어 치료 서비스를 제공하는 것을 목표로 합니다. <br />
              최신 AI 기술을 활용하여 언어 지연 치료를 지원합니다.
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32 grid flex-grow pt-20 text-center lg:mb-0 lg:h-6 lg:w-4/6 lg:max-w-5xl lg:-translate-y-28 lg:grid-cols-4 lg:text-left">
        <Link href="/chitchat" legacyBehavior>
          <div
            //href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <p className="m-0 max-w-[30ch] text-sm opacity-50"></p>
            <h2 className="mb-3 text-base font-semibold">
              떠들자{" "}
              {/* <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
              -&gt;
            </span> */}
            </h2>
            <p className="m-0 max-w-[30ch] text-xs opacity-50">
              Team Archi 의 언어치료 어플리케이션 떠들자.
            </p>
          </div>
        </Link>
        <Link href="/archi" legacyBehavior>
          <motion.div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            variants={linkVariants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 1 }}
          >
            <h2 className="mb-3 text-base font-semibold">
              Archi{" "}
              {/* <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2>
            <p className="m-0 max-w-[30ch] text-xs opacity-50">
              Team Archi 의 팀원 5명을 소개합니다.
            </p>
          </motion.div>
        </Link>

        <Link href="/journey" legacyBehavior>
          <a
            // href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-bases mb-3 font-semibold">
              Journey{" "}
              {/* <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2>
            <p className="m-0 max-w-[30ch] text-xs opacity-50">
              Team Archi 의 여정을 소개합니다.
            </p>
          </a>
        </Link>
        <Link href="/thanks" legacyBehavior>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-base font-semibold">
              Thanks to{" "}
              {/* <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-xs opacity-50">
              &quot;떠들자&quot; 제작에 도움을 주신 분들을 소개합니다.
            </p>
          </a>
        </Link>
      </div>
    </main>
  );
}
