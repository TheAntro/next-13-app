import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <nav className={styles['main-nav']}>
      <ul className={styles['main-nav__list']}>
        <li className={styles['main-nav__item']}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles['main-nav__item']}>
          <Link href="/leagues">Leagues</Link>
        </li>
        <li className={styles['main-nav__item']}>
          <Link href="/tournaments">Tournaments</Link>
        </li>
      </ul>
    </nav>
  );
}
