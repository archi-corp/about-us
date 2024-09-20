import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-16 pr-16 pt-10">
      <div className="z-10 w-full max-w-5xl flex-grow items-center justify-between text-sm md:flex lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center text-pretty pt-2 font-medium lg:static lg:w-auto lg:rounded-xl">
          archichatco@gmail.com &nbsp;
        </p>

        <div className="hidden lg:block md:block sm:block fixed bottom-0 left-0 w-full items-end justify-center bg-gradient-to-t from-white via-white text-xl font-semibold lg:static lg:size-auto lg:bg-none dark:from-black dark:via-black">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/logo.png"
              alt="Archi Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="z-0 m-0 flex h-4/6 w-full justify-center">
        {/* 첫 번째 div */}
        <div className="z-[-1] flex h-full w-[550px] -translate-y-10 place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-slate-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-teal-200 after:via-teal-300 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-teal-900 after:dark:via-[#318284] after:dark:opacity-40">
          <Image
            className="z-0 hidden sm:block md:block"
            src="/mockup.png"
            alt="mockup pic"
            width={550}
            height={500}
            priority
          />
        </div>

        {/* 사이여백 */}
        <div className="w-2" />

        <div className="relative z-[-1] flex h-full w-[550px] place-items-start pl-4 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-slate-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-teal-200 after:via-teal-300 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-700 before:dark:opacity-10 after:dark:from-teal-900 after:dark:via-[#318284] after:dark:opacity-40">
          <div className="sm: flex flex-col md:flex-col lg:flex-col">


            <div className="z-10 hidden pb-4 pt-6 text-4xl font-semibold sm:mt-0 sm:block md:block lg:mt-40 lg:pt-0">

              떠들자{" "}
              <span className="pl-4 text-base font-medium"> 12월중 베타테스트 예정</span>


            </div>
            <div className="z-10 mt-3 hidden text-2xl font-semibold sm:block">
              언어발달장애를 지닌 모든 사람들을 위한 <br/> AI-언어발달지도사.
            </div>
            <div className="z-10 mt-10 hidden font-sans sm:block">
              <span className="font-bold">떠들자</span>는 언어발달장애를 가진
              아동들을 위한 <br/>
              AI 기반 언어 치료 서비스를 제공하는 것을 목표로 합니다. <br/>
              최신 AI 기술을 활용하여 언어 지연 치료를 지원합니다.
            </div>
          </div>
        </div>
      </div>

      <div
          className="mb-32 grid flex-grow pt-20 text-center lg:mb-0 lg:h-6 lg:w-4/6 lg:max-w-5xl lg:-translate-y-28 lg:grid-cols-4 lg:text-left">
        <Link href="/chitchat" legacyBehavior>
          <div className="group z-20 rounded-lg border border-transparent px-5 py-4 transition-colors lg:hover:border-gray-300 lg:hover:bg-gray-100 lg:hover:dark:border-neutral-700 lg:hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-base font-semibold">떠들자 </h2>
            <p className="m-0 max-w-[30ch] text-xs opacity-50">
              Team Archi 의 언어치료 어플리케이션 떠들자.
            </p>
          </div>
        </Link>
        <Link href="/archi" legacyBehavior>
          <div className="group z-20 rounded-lg border border-transparent px-5 py-4 transition-colors lg:hover:border-gray-300 lg:hover:bg-gray-100 lg:hover:dark:border-neutral-700 lg:hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-base font-semibold">Archi </h2>
            <p className="m-0 max-w-[30ch] text-xs opacity-50">
              Team Archi 의 팀원 5명을 소개합니다.
            </p>
          </div>
        </Link>

        <Link href="/journey" legacyBehavior>
          <div className="group z-20 rounded-lg border border-transparent px-5 py-4 transition-colors lg:hover:border-gray-300 lg:hover:bg-gray-100 lg:hover:dark:border-neutral-700 lg:hover:dark:bg-neutral-800/30">
            <h2 className="text-bases mb-3 font-semibold">Journey </h2>
            <p className="m-0 max-w-[30ch] text-xs opacity-50">
              Team Archi 의 여정을 소개합니다.
            </p>
          </div>
        </Link>
        <Link href="/thanks" legacyBehavior>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors lg:hover:border-gray-300 lg:hover:bg-gray-100 lg:hover:dark:border-neutral-700 lg:hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-base font-semibold">Thanks to </h2>
            <p className="m-0 max-w-[30ch] text-balance text-xs opacity-50">
              &quot;떠들자&quot; 제작에 도움을 주신 분들을 소개합니다.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
