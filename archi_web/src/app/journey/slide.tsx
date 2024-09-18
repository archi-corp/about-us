"use client";

import Image from "next/image";

export default function Slide({
  img,
  title,
  subtitle,
}: {
  img: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="w-full max-w-xs p-2">
      <div className="group overflow-hidden rounded-lg border border-transparent p-3 transition-colors hover:border-gray-300 hover:bg-gray-100">
        {/* 썸네일 컨테이너 */}
        <div className="relative h-0 w-full pb-[60%]">
          <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
        <h2 className="mt-4 text-center text-xl font-semibold">{title}</h2>
        <p className="mt-2 line-clamp-2 text-center text-base text-gray-600">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
