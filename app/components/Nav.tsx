import { Link, NavLink } from '@remix-run/react';
import classNames from 'classnames';
import Title from './Title';

function Linky({ to, text }: { to: string; text: string }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          classNames(
            'block py-1 pr-4 pl-3 bg-transparent text-white p-0 hover:text-blue-300 md:py-2',
            {
              'text-blue-500 font-bold': isActive,
            },
            'nav-link nav-link-underline nav-link-underline-white',
          )
        }
      >
        {text}
      </NavLink>
    </li>
  );
}

function LinksList() {
  return (
    <>
      <Linky to="/" text="Home" />
      {/* <Linky to="/resume" text="Resume" /> */}
      {/* <Linky to="/contact" text="Contact" /> */}
    </>
  );
}

export default function Nav() {
  return (
    <nav className="bg-stone-800 border-gray-200 px-2 py-2">
      <div className="container flex flex-wrap flex-col md:flex-row items-center mx-auto">
        <Link to="/">
          <Title text="Bryan Eaton" size="md" />
        </Link>
        <div className="flex-1" />
        <div className="w-auto hidden md:block">
          <ul className="flex flex-row space-x-8 text-sm font-medium">
            <LinksList />
          </ul>
        </div>
        {/* TODO: Uncomment this to have a mobile menu */}
        {/* <div className="w-auto md:hidden block">
          <ul className="flex flex-col text-sm font-sm text-center">
            <LinksList />
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
