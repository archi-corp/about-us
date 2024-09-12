"use client";
import Image from "next/image";
import Link from "next/link";
export default function Chitchat() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-10 pr-10">
        <div className = "flex flex-row w-full h-full rounded-tr-xl bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none ">
            <div className ="w-32  flex-shrink-0 bg-white rounded-t-2xl ml-3">상단 네비바 </div>

            <div className=" w-full items-center justify-start font-mono text-sm  rounded-tl-3xl rounded-tr-3xl lg:flex">
                {/* header */}
                <Link href ="/" className="text-4xl font font-thin flex w-full justify-center lg:static lg:w-auto  lg:p-4" > &lt; </Link> &nbsp; 
                <p className ="text-lg font font-bold font-sans">Main</p>
            </div>
        </div>
       
        <div className="flex flex-row w-full  ">
            <div className=" w-32 flex-shrink-0 bg-white rounded-b-2xl ml-3" > 네비바 </div>
            
            <div className="w-full ">
                
                <div className=" h-72 w-full flex flex-row">
                    <div className ="h-72 w-72 flex-shrink-0">
                        <Image src="/logo.png" alt="archi" width={288} height={288}/>
                    </div>
                    <div className =" w-full p-7 "> 

                        <h2 className="font-sans font-bold text-xl p-2">Team Archi 의 언어치료 어플리케이션 떠들자</h2>
                        <p > 떠들자는 무료 언어치료 어플리케이션으로 표현,어휘력을 향상을 위해 개발되었습니다.</p>
                        <p> 정보제공은 덤!</p>
                        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
                    </div>       
                </div>
                          
                <div className="h-60 w-full flex flex-row " > 
                    <div className ="h-72 w-72 flex-shrink-0">
                        <Image src="/logo.png" alt="archi" width={200} height={200}/>
                    </div>
                    <div className =" w-full p-7 "> 
                        <h2 className="font-sans font-bold text-xl p-2">Team Archi 의 언어치료 어플리케이션 떠들자</h2>                            <p > 떠들자는 무료 언어치료 어플리케이션으로 표현,어휘력을 향상을 위해 개발되었습니다.</p>
                        <p> 정보제공은 덤!</p>
                    </div>       
                </div>
                    
                {/* <div className="bg-blue-300 h-60 w-full">section line</div> */}
            </div>
        </div>

    </main>
  );
}

