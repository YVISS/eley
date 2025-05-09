import Student from './Student.jsx'
import Header from './Header.jsx'

export default function MyApp() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="hero">
          <div className="hero__container">
            <h1 className="hero__title">Welcome to my portfolio</h1>
            <p className="hero__description">This is a simple portfolio page.</p>
            <img src="" alt="" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="main-content">
        </div>
      </div>
    </>
  );
}