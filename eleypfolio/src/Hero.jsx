import React, { useEffect, useRef } from 'react';
import './css/hero.css';

const roles = ["Front-end Developer", "UI/UX Enthusiast", "Web Designer"];

export default function Hero() {
    const typingRef = useRef(null);
    let index = 0;
    let charIndex = 0;

    useEffect(() => {
        function type() {
            if (charIndex < roles[index].length) {
                typingRef.current.innerHTML += roles[index][charIndex];
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingRef.current.innerHTML = roles[index].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                index = (index + 1) % roles.length;
                setTimeout(type, 500);
            }
        }

        type(); // Start typing on mount
    }, []);

    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__img">
                    <img src="/imgs/hero.jpg" alt="Hero Image" />
                </div>
                <div className="hero__info">
                    <h1 className="hero__name">Hi, I'm <span className="name-highlight">Lewee Aaron A. Ombac</span> 👋</h1>
                    <h2>Aspiring <span id="typing-text" ref={typingRef}></span></h2>
                    <p className="hero__description">3rd Year BSCS Student | Passionate about Web Development & Design 🚀</p>
                    <div className="hero__downloadables">
                        <button>
                            <a href="#" target="_blank" download="Resume"><span>Resume</span></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
