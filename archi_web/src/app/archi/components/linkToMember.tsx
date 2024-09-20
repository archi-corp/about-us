import Link from "next/link";
import Image from "next/image";

export function LinkToMember({
  name,
  imageSrc,
  link,
}: {
  name: string;
  imageSrc: string;
  link: string;
}) {
  return (
    <div className={"group flex w-full max-w-xs flex-row items-center justify-center lg:justify-start"}>
      <Link href={link} legacyBehavior>
        <div
          className={"group flex flex-row items-center rounded-lg px-5 py-2"}
          rel={"noopener noreferrer"}
        >
          <Image
            src={imageSrc}
            alt={name}
            className={"mr-4 rounded-full object-cover"}
            width={20}
            height={20}
          />
          <p className={"text-sm font-semibold"}>
            {name + " "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              {" "}
              -&gt;
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}
