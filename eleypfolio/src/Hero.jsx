import './css/Hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__img">
                    <img src="./src/imgs/hero.jpg" alt="Hero Image" />
                </div>
                <div className="hero__info">
                    <h1 className="hero__name">Hi, I'm <span class="name-highlight">Lewee Aaron A. Ombac</span> 👋</h1>
                    <h2>Aspiring <span id="typing-text"></span></h2>
                    <p>3rd Year BSCS Student | Passionate about Web Development & Design 🚀</p>
                    <p className="hero__description"></p>
                </div>
            </div>
        </div>
    );
}