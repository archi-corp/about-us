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
    <div className="flex w-full items-center justify-center p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
      <div className="group max-w-md overflow-hidden rounded-lg border border-transparent p-5 transition-colors hover:border-gray-300 hover:bg-gray-100">
        {/* 5:3 비율의 썸네일 컨테이너 */}
        <div className="relative h-0 w-full pb-[60%]">
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        </div>
        <h2 className="mt-4 text-center text-xl font-semibold">{title}</h2>
        <p className="mt-2 line-clamp-1 text-center text-base text-gray-600">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
