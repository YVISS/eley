import {headings} from "../../fonts/fonts";
import Image from "next/image";

export default function Hero(){
    return(
        <section className={`${headings.className} flex flex-col py-20 justify-center items-center h-auto`}>
            <Image src={"/placeholder-img.svg"} alt={"hero image"} width={200} height={100} className="rounded-full mb-8"/>
            <h1 className="w-[60%] text-center tracking-tight">Frontend developer crafting digital experiences</h1>
            <p className="w-[70%] text-center text__body">I build clean, responsive websites that solve real problems. My code is precise, my designs are sharp.</p>
            <div className={`${headings.className} hero__btns gap-4 flex flex-row align-center justify-center mt-8` }>
                <button className="rounded-lg px-4 py-[1vw] text-white bg-black">Explore</button>
                <button className="rounded-lg px-5 py-[1vw] border-1">Hire</button>
            </div>
        </section>
    );
}