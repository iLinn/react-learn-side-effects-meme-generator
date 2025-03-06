import reactLogo from '/src/assets/react.svg';
import trollFace from "/src/assets/troll-face.png";
import './Header.css';

export default function Header() {
  return (
    <header className="box-shadow header">
      <div>
        <a href="/" className="icon-link shadow flex-grow-1">
          <img src={trollFace} className="icon face" alt="chef logo" />
        </a>
      </div>
      <h1>Meme Generator</h1>
      <div>
        <a href="https://react.dev" target="_blank" className="logo-link flex-grow-1">
          <img src={reactLogo} className="shadow react-logo" alt="React logo" />
          <span className="fw-bolder">React</span>
        </a>
      </div>
    </header>
  );
}