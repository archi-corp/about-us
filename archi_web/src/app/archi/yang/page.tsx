"use client";
import { Topbar } from "../components/topbar";
import { Profile } from "../components/profile";
import { LinkToMember } from "../components/linkToMember";

export default function Yang() {
  return (
      <main
          className={"flex min-h-screen flex-col items-center justify-center px-24"}
      >
          {/*  Fix logo and back button to the top */}
          <Topbar githubLink={"https://github.com/archi-corp"}></Topbar>
          <div className={"flex w-full max-w-7xl flex-col"}>
              {/* Name and Information Section */}
              <div
                  className={
                      "flex w-full grow flex-col items-center justify-center lg:flex-row"
                  }
              >
                  {/*  Profile */}
                  <Profile
                      imageSrc={"/profile_images/yang.png"}
                      name={"양성우"}
                      role={<>AI Developer</>}
                  ></Profile>
                  <div
                      className={
                          "justify-center lg:justify-start relative z-10 mx-4 lg:mx-32 flex flex-col items-center lg:items-start before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"
                      }
                  >
                      <h1
                          className={
                              "mb-3 text-center text-2xl font-semibold lg:text-left lg:text-4xl"
                          }
                      >
                          Hello, I'm yang
                      </h1>
                      <p className={"max-w-4xl text-sm opacity-80"}>
                          여기서부터 저의 자기소개를 주저리주저리 적으면 좋지 않을까요.
                          여기부터는 성우오빠의 간단한 자기소개 시작!! 아래 소셜 미디어는
                          원하시는거 변경/추가해드릴게요
                      </p>
                      <div className={"my-4 flex gap-8"}>
                          <a
                              className="pointer-events-auto flex place-items-center gap-2 p-8 lg:p-0"
                              href="https://github.com/racheliee"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <svg
                                  className={"h-5 w-5 max-w-4xl"}
                                  aria-hidden={"true"}
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 496 512"
                              >
                                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                  <path
                                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                              </svg>
                              <p className={"max-w-4xl text-sm opacity-90"}> github </p>
                          </a>

                          <a
                              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                              href="https://www.linkedin.com/in/racheliee/"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <svg
                                  className={"h-5 w-5 max-w-4xl"}
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 448 512"
                              >
                                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                  <path
                                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                              </svg>
                              <p className={"max-w-4xl text-sm opacity-90"}> linkedin </p>
                          </a>
                      </div>
                  </div>
              </div>
              {/*  links to other members */}
              <div className={"flex flex-col items-center justify-center lg:items-start lg:justify-start"}>
                  <LinkToMember name={"강민석"} imageSrc={"/profile_images/minseok.jpg"} link={"/archi/minseok"}></LinkToMember>
                  <LinkToMember name={"박연우"} imageSrc={"/profile_images/rachel.jpg"} link={"/archi/rachel"}></LinkToMember>
                  <LinkToMember name={"우정균"} imageSrc={"/profile_images/woodio.jpg"} link={"/archi/woodio"}></LinkToMember>
                  <LinkToMember name={"이지훈"} imageSrc={"/profile_images/rlaalswl.jpg"} link={"/archi/rlaalswl"}></LinkToMember>
              </div>
          </div>
      </main>
  );
}
