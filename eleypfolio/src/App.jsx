import Projects from './Projects.jsx'
import Header from './Header.jsx'
import Hero from './Hero.jsx';


export default function MyApp() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Hero />
        <div className="divider"></div>
        <main>
          <div className="projects">
            <Projects />
          </div>
        </main>
        <footer>

        </footer>
      </div>
    </>
  );
}