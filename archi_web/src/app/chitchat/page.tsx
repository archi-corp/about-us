"use client";
import Image from "next/image";
import Link from "next/link";
export default function Chitchat() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-10 pr-10">
        <div className = "flex flex-row w-full h-full rounded-tr-xl ">
            <div className ="w-32 bg-slate-100 flex-shrink-0 ">상단 네비바 </div>
            <div className="z-10 bg-orange-900 w-full items-center justify-start font-mono text-sm rounded-tl-3xl rounded-tr-3xl lg:flex">
                {/* header */}
                <Link href ="/" className="text-4xl font font-thin flex w-full justify-center lg:static lg:w-auto  lg:p-4" > &lt; </Link> &nbsp; 
                <p className ="text-lg font font-bold font-sans">Main</p>
            </div>
        </div>

        <div className="flex flex-row w-full bg-sky-100 ">
            <div className="bg-slate-100 w-32 flex-shrink-0"> 네비바 </div>
            
            <div className="bg-slate-400 w-full">
                <div className="bg-red-800 h-72 w-full">headline</div>
                <div className="bg-blue-300 h-60 w-full">section line</div>
                <div className="bg-blue-300 h-60 w-full">section line</div>
            </div>
        </div>

    </main>
  );
}

