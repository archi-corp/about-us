import Image from "next/image";

export function Profile({ imageSrc, name, role }: { imageSrc: string; name: string; role: any }) {
    return (
        <div className="group mb-8 items-center justify-center rounded-lg px-5 py-4 text-center lg:text-left">
            <Image
                src={imageSrc}
                alt={name}
                className="mx-auto mb-5 items-center rounded-full object-cover sm:size-24 lg:mx-0 lg:size-32 lg:items-start"
                width={100}
                height={100}
            />
            <h2 className="mb-3 justify-center text-2xl font-semibold lg:items-start">
                {name}
            </h2>
            <p className="m-0 max-w-[30ch] whitespace-nowrap text-sm opacity-50">
                {role}
            </p>
        </div>
    );
}
