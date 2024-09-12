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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
  
        <p className="text-pretty font-medium fixed left-0 top-0 flex w-full justify-center  lg:static lg:w-auto  lg:rounded-xl ">
        archichatco@gmail.com &nbsp;
          
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 구성 변경중에 있습니다. 아직 내용업데이트가 되지 않은점 양해부탁드립니다.{" "}
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <Link href="/chitchat" legacyBehavior>
        <div
          //href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            
          </p>
          <h2 className="mb-3 text-2xl font-semibold">
            떠들자{" "}
            {/* <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
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
            <h2 className="mb-3 text-2xl font-semibold">
              Archi{" "}
              {/* <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2> 
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Team Archi 의 소중귀염뽀짝 팀원 5명을 소개합니다. 
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
            <h2 className="mb-3 text-2xl font-semibold">
              Journey{" "}
              {/* <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
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
          
            <h2 className="mb-3 text-2xl font-semibold" >
              Thanks to{" "}
              {/* <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Team Archi 의  &quot;떠들자 &quot;<br /> 어플리케이션 제작에 도움을 주신 분들을 소개합니다. 
            </p>
          </a>
        </Link>
      </div>
    </main>
  );
}

