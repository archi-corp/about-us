import Link from "next/link";
import Image from "next/image";

export function Topbar({link}: {link: string}) {
  return (
    <div className="z-10 flex w-full max-w-7xl items-center justify-between font-mono text-sm">
      <Link
        href={link}
        className="font left-0 top-0 flex w-full justify-center text-4xl font-thin lg:static lg:w-auto lg:rounded-xl lg:p-4"
      >
        {" "}
        &lt;{" "}
      </Link>

      <Image
        src="/logo.png"
        alt="archi logo"
        className="dark:accent-teal-300"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
