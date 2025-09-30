import { headings } from "../../fonts/fonts";
import { body } from "../../fonts/fonts";

export default function Skills() {
    return (
        <section className="grid grid-cols-2">
            <div className="skills__info text-start">
                <p className={`${body.className} antialiazed`}>Skills</p>
                <h1 className={`${headings.className} antialiazed`}>Technical skills that transform digital landscapes</h1>
                <p>Passionate about creating intuitive and efficient web solutions with modern technologies.</p>
            </div>
            <div className="skills__imgae">

            </div>
        </section>
    );
}