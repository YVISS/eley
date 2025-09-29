import Link from "next/link";

export default function Header() {
    return (
        <header className="px-10 py-4">
            <ul className="grid grid-cols-3 items-center w-full">
                <div className="header__logo flex justify-start">
                    <Link href={"/"}>
                        <p>Logo</p>
                    </Link>
                </div>
                <div className="header__link flex flex-row justify-center gap-8">
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
                <div className="header__btn flex justify-end">
                    <Link href={"/contact"}>
                        <button>Contact</button>
                    </Link>
                </div>
            </ul>
        </header>
    );
}