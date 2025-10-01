import Link from "next/link";
import Image from "next/image";
import { headings } from "../../fonts/fonts";
import { body } from "../../fonts/fonts";

export default function Skills() {
  return (
    <section className="">
      <div className="skills__section1 grid grid-cols-2">
        <div className="skills__info text-start m-20 flex flex-col">
          <p className={`${body.className} antialiazed`}>Skills</p>
          <h1 className={`${headings.className} antialiazed pb-8`}>
            Technical skills that <br />
            transform digital <br />
            landscapes
          </h1>
          <p className="pb-8">
            Passionate about creating intuitive and efficient web solutions with
            modern technologies.
          </p>
          <div className="skills__btns flex flex-row gap-8 text-sm items-center">
            <Link href={"/about"}>
              <button className="border-1 px-4 py-2">
                <p className={`${body.className} antialiased`}>Learn More</p>
              </button>
            </Link>
            <Link href={"/contacts"}>
              <button className="">
                <p
                  className={`${body.className} antialiased items-center flex`}
                >
                  Contact
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </p>
              </button>
            </Link>
          </div>
        </div>
        <div className="skills__image flex justify-center items-center p-20">
          <Image
            src="/placeholder.jpeg"
            height={200}
            width={200}
            className="h-[70vh] w-[auto] aspect-16/9 bg-gray-200 object-cover"
            alt="Skills_image"
            title="Skills_image"
          />
        </div>
      </div>
      <div className="skills__section2 grid grid-cols-2">
        <div className="skills__list mx-20 flex flex-col gap-2">
          <h1 className={`${headings.className} antialiased text-xl`}>
            04 Web performance
          </h1>
          <p>
            Optimizing load times and implementing best practices for creating
            fast, efficient web experiences across devices.
          </p>
        </div>
        <div className="skills__image flex justify-center items-center mx-20">
          <Image
            src="/placeholder.jpeg"
            height={200}
            width={200}
            className="h-[70vh] w-[auto] aspect-16/9 bg-gray-200 object-cover"
            alt="Skills_image"
            title="Skills_image"
          />
        </div>
      </div>
    </section>
  );
}
