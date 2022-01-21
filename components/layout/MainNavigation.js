import Link from 'next/link';
import NavigationCSS from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={NavigationCSS.header}>
      <div className={NavigationCSS.logo}>Meetup Web</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add new Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
