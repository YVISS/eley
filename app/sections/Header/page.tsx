import Link from "next/link";
import {headings} from "../../fonts/fonts";
import {body} from "../../fonts/fonts";

export default function Header() {
    return (
        <header className={`${body.className} antialiased px-10 py-4`}>
            <ul className="grid grid-cols-3 items-center w-full">
                <div className="header__logo flex justify-start">
                    <Link href={"/"}>
                        <p>Logo</p>
                    </Link>
                </div>
                <div className="header__link flex flex-row justify-center gap-8 text-sm">
                    <li>
                        <Link href={""}>
                            <p>Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <p>Skills</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <p>Resources</p>
                        </Link>
                    </li>
                </div>
                <div className="header__btn flex justify-end text-md">
                    <Link href={"/contact"}>
                        <button className="border-1 px-4 py-2 bg-black text-[#F2F2F2]">Contact</button>
                    </Link>
                </div>
            </ul>
        </header>
    );
}