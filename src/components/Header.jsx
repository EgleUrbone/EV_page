import { NavLink } from 'react-router-dom';
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
    <header>
      <p className='logo'>Reklamos paslaugos</p>
      <nav>
        <div className={css.burger} onClick={toggleHamburger}>
          <AiOutlineMenu />
        </div>
        <div className={`${css.navLinks} ${hamburgerOpen ? css.closed : css.open}`}>
          <NavLink to='#apie'>Apie</NavLink>
          <NavLink to='#paslaugos'>Paslaugos</NavLink>
          <NavLink to='#projektai'>Projektai</NavLink>
          <NavLink to='#kontaktai'>Kontaktai</NavLink>
        </div>
      </nav>
    </header>
  );
}
