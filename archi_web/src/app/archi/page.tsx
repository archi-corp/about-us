"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-24">
      {/*Fix logo and back button to the top*/}
      <div className="z-10 flex w-full max-w-7xl items-center justify-between font-mono text-sm">
        {/*<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">*/}
        <Link
          href="/"
          className="font left-0 top-0 flex w-full justify-center text-4xl font-thin lg:static lg:w-auto lg:rounded-xl lg:p-4"
        >
          {" "}
          &lt;{" "}
        </Link>{" "}
        &nbsp;
        {/*archi logo image*/}
        <Image
          src="/logo.png"
          alt="archi logo"
          className="dark:accent-teal-300"
          width={100}
          height={24}
          priority
        />
      </div>

      <div className="flex w-full grow flex-col items-center justify-center">
        {/* team archi title */}
        <div className="z-0 flex w-full place-items-center items-center justify-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-teal-100 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-100 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] lg:mb-4 before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
          <h1 className="z-10 text-center text-2xl font-semibold sm:mb-3 lg:text-4xl">
            Introducing Team Archi ツ
          </h1>
        </div>

        {/* Center Names Grid */}
        <div className="flex w-full items-center justify-center">
          <div className="z-10 grid content-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left">
            {/* 강민석 =======================================================================================================================*/}
            <Link href="/archi/minseok" legacyBehavior>
              <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/profile_images/minseok.jpg"}
                  alt={"강민석"}
                  className={
                    "mx-auto mb-5 rounded-full object-cover sm:h-20 sm:w-20 lg:mx-0 lg:h-24 lg:w-24 lg:items-start"
                  }
                  width={100}
                  height={100}
                />
                <p className="m-0 max-w-[30ch] text-sm opacity-50"></p>
                <h2 className="mb-3 text-2xl font-semibold">
                  강민석{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Backend Developer <br /> AI Developer
                </p>
              </div>
            </Link>
            {/* 박연우 =======================================================================================================================*/}
            <Link href="/archi/rachel" legacyBehavior>
              <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/profile_images/rachel.jpg"}
                  alt={"박연우"}
                  className={
                    "mx-auto mb-5 rounded-full object-cover sm:h-20 sm:w-20 lg:mx-0 lg:h-24 lg:w-24 lg:items-start"
                  }
                  width={100}
                  height={100}
                />

                <h2 className="mb-3 text-2xl font-semibold">
                  박연우{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Project Manager
                  <br /> Backend Developer <br /> Frontend Developer
                </p>
              </div>
            </Link>
            {/* 양성우 =======================================================================================================================*/}
            <Link href="/archi/yang" legacyBehavior>
              <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/profile_images/yang.jpg"}
                  alt={"양성우"}
                  className={
                    "mx-auto mb-5 rounded-full object-cover sm:h-20 sm:w-20 lg:mx-0 lg:h-24 lg:w-24 lg:items-start"
                  }
                  width={100}
                  height={100}
                />
                <h2 className="mb-3 text-2xl font-semibold">
                  양성우{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  AI Developer
                </p>
              </div>
            </Link>
            {/* 이지훈 =======================================================================================================================*/}
            <Link href="/archi/rlaalswl" legacyBehavior>
              <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/profile_images/rlaalswl.jpg"}
                  alt={"이지훈"}
                  className={
                    "mx-auto mb-5 rounded-full object-cover sm:h-20 sm:w-20 lg:mx-0 lg:h-24 lg:w-24 lg:items-start"
                  }
                  width={100}
                  height={100}
                />
                <h2 className="mb-3 text-2xl font-semibold">
                  이지훈{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                  Frontend Developer
                </p>
              </div>
            </Link>
            {/* 우정균 =======================================================================================================================*/}
            <Link href="/archi/woodio" legacyBehavior>
              <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/profile_images/woodio.jpg"}
                  alt={"우정균"}
                  className={
                    "mx-auto mb-5 rounded-full object-cover sm:h-20 sm:w-20 lg:mx-0 lg:h-24 lg:w-24 lg:items-start"
                  }
                  width={100}
                  height={100}
                />
                <h2 className="mb-3 text-2xl font-semibold">
                  우정균{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
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
      </div>
    </main>
  );
}
