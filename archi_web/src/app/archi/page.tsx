"use client";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/*Fix logo and back button to the top*/}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30"> */}
        <Link
          href="/"
          className="font fixed left-0 top-0 flex w-full justify-center text-4xl font-thin lg:static lg:w-auto lg:rounded-xl lg:p-4"
        >
          {" "}
          &lt;{" "}
        </Link>{" "}
        &nbsp;
        <div className="fixed right-0 top-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white lg:static lg:size-auto lg:bg-none dark:from-black dark:via-black">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            아르키 로고{" "}
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

      <div
          className="flex-grow flex items-center justify-center w-full place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
        <h1 className="text-center text-2xl font-bold lg:text-4xl">
          Team Archi
        </h1>
      </div>

      {/* Center Names Grid */}
      <div className="flex flex-grow items-center justify-center w-full">
        <div className="grid content-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left">
          <Link href="/archi/minseok" legacyBehavior>
            <div
                //   href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                //   target="_blank"
                rel="noopener noreferrer"
            >
              <Image src={"/profile_images/minseok.jpg"} alt={"강민석"} className={"rounded-full object-cover mb-5 items-center"} width={100} height={100}/>
              <p className="m-0 max-w-[30ch] text-sm opacity-50"></p>
              <h2 className="mb-3 text-2xl font-semibold">
                강민석{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Backend Developer <br/> AI Developer
              </p>
            </div>
          </Link>
          <Link href="/archi/rachel" legacyBehavior>
            <div
                //   href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                //   target="_blank"
                rel="noopener noreferrer"
            >
              <Image src={"/profile_images/rachel.jpg"} alt={"박연우"} className={"rounded-full object-cover mb-5 items-center"} width={100} height={100}/>

              <h2 className="mb-3 text-2xl font-semibold">
                박연우{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Project Manager
                <br/> Backend Developer <br/> Frontend Developer
              </p>
            </div>
          </Link>
          <Link href="/archi/yang" legacyBehavior>
            <div
                //   href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                //   target="_blank"
                rel="noopener noreferrer"
            >
              <Image src={"/profile_images/yang.jpg"} alt={"양성우"} className={"rounded-full object-cover mb-5 items-center"} width={100} height={100}/>
              <h2 className="mb-3 text-2xl font-semibold">
                양성우{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">AI Developer</p>
            </div>
          </Link>
          <Link href="/archi/rlaalswl" legacyBehavior>
            <div
                //   href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                //   target="_blank"
                rel="noopener noreferrer"
            >
              <Image src={"/profile_images/rlaalswl.jpg"} alt={"이지훈"} className={"rounded-full object-cover mb-5 items-center"} width={100} height={100}/>
              <h2 className="mb-3 text-2xl font-semibold">
                이지훈{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                Frontend Developer
              </p>
            </div>
          </Link>
          <Link href="/archi/woodio" legacyBehavior>
            <div
                //   href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                //   target="_blank"
                rel="noopener noreferrer"
            >
              <Image src={"/profile_images/woodio.jpg"} alt={"우정균"} className={"rounded-full object-cover mb-5 items-center"} width={100} height={100}/>
              <h2 className="mb-3 text-2xl font-semibold">
                우정균{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                AI Developer
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
