"use client";
import { Topbar } from "../components/topbar";
import { Profile } from "../components/profile";
import { LinkToMember } from "../components/linkToMember";
import { Description } from "../components/description";

export default function Rlaalswl() {
  return (
    <main
      className={"flex min-h-screen flex-col items-center justify-center px-24"}
    >
      {/*  Fix logo and back button to the top */}
      <Topbar link="/archi"></Topbar>

      <div className={"flex w-full max-w-7xl flex-col"}>
        {/* Name and Information Section */}
        <div
          className={
            "flex w-full grow flex-col items-center justify-center  lg:my-12 lg:flex-row"
          }
        >
          {/*  Profile */}
          <Profile
            imageSrc={"/profile_images/rlaalswl.jpg"}
            name={"이지훈"}
            role={<>Frontend Developer</>}
          ></Profile>
          {/* Description */}
          <Description
            intro="Hello, I'm rlaalswl"
            desc="여기서부터 저의 자기소개를 주저리주저리 적으면 좋지 않을까요. 여기부터는 지훈오빠의 간단한 자기소개 시작!! 아래 소셜 미디어는 원하시는거 변경/추가해드릴게요"
            github_link="https://github.com"
            linkedin_link="https://linkedin.com"
          ></Description>
        </div>

        {/*  links to other members */}
        <div
          className={
            "flex flex-col items-center justify-center lg:items-start lg:justify-start"
          }
        >
          <LinkToMember
            name={"강민석"}
            imageSrc={"/profile_images/minseok.jpg"}
            link={"/archi/minseok"}
          ></LinkToMember>
          <LinkToMember
            name={"박연우"}
            imageSrc={"/profile_images/rachel.jpg"}
            link={"/archi/rachel"}
          ></LinkToMember>
          <LinkToMember
            name={"우정균"}
            imageSrc={"/profile_images/woodio.jpg"}
            link={"/archi/woodio"}
          ></LinkToMember>
          <LinkToMember
            name={"양성우"}
            imageSrc={"/profile_images/yang.jpg"}
            link={"/archi/yang"}
          ></LinkToMember>
        </div>
      </div>
    </main>
  );
}
