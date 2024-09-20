import Link from "next/link";
import Image from "next/image";

export function Topbar({ githubLink }: {githubLink: string}) {
    return (
        <div className="z-10 flex w-full max-w-7xl items-center justify-between font-mono text-sm">
            <Link
                href={"/archi"}
                className="font left-0 top-0 flex w-full justify-center text-4xl font-thin lg:static lg:w-auto lg:rounded-xl lg:p-4"
            >
                {" "}
                &lt;{" "}
            </Link>
            <div className="right-0 top-0 flex w-full items-center justify-center bg-transparent lg:static lg:size-auto lg:bg-none">
                <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/logo-chalk.png"
                        alt="archi logo"
                        className="dark:accent-teal-300"
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div>
        </div>
    );
}
