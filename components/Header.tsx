// Components
import Link from 'next/link';
import Image from 'next/image';

// Styles
import styles from '../styles/Header.module.css';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Portfolio
        </Typography>

        <nav className={`${styles.navbar}`}>
          <ul className={`${styles.navList}`}>
            <li className={`nav-item`}>
              <Link href="/">
                <a className={`nav-link`}>Home</a>
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link href="#">
                <a className={`nav-link`}>About</a>
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link href="#">
                <a className={`nav-link`}>Projects</a>
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link href="#">
                <a className={`nav-link`}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

/*
<header className={`${styles.header}`}>
      <div>
        <Image src="/" width={10} height={10} alt=""/>
        <p>Portfolio</p>
      </div>
      
      <nav className={`${styles.navbar}`}>
        <ul className={`${styles.navList}`}>
          <li className={`nav-item`}>
            <Link href="/">
              <a className={`nav-link`}>Home</a>
            </Link>
          </li>
          <li className={`nav-item`}>
            <Link href="#">
              <a className={`nav-link`}>About</a>
            </Link>
          </li>
          <li className={`nav-item`}>
            <Link href="#">
              <a className={`nav-link`}>Projects</a>
            </Link>
          </li>
          <li className={`nav-item`}>
            <Link href="#">
              <a className={`nav-link`}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
*/