import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineMenu } from 'react-icons/ai';
import css from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    // console.log('togglina');
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className={css.headerCont}>
      <p className={css.logo}>Reklamos paslaugos</p>
      <nav>
        <div className={css.burger} onClick={toggleHamburger}>
          <AiOutlineMenu />
        </div>
        <div
          className={`${css.navLinks} ${hamburgerOpen ? css.closed : css.open}`}
        >
          <Link to='#apie'>Apie</Link>
          <Link to='#paslaugos'>Paslaugos</Link>
          <Link to='#projektai'>Projektai</Link>
          <Link to='#kontaktai'>Kontaktai</Link>
        </div>
      </nav>
    </header>
  );
}
