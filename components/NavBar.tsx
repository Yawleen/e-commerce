import Link from "next/link";
import { HOME_ROUTE, PRODUCTS_ROUTE, CHECKOUT_ROUTE } from "@/routes";

export default function NavBar() {
  return (
    <nav className="sticky top-0 navbar bg-white shadow z-50">
      <div className="navbar-start">
        <div className="hidden lg:block">
          <Link href={HOME_ROUTE}>Mon E-Commerce</Link>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-m dropdown-content bg-white rounded-box border z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={HOME_ROUTE}>Accueil</Link>
            </li>
            <li>
              <Link href={PRODUCTS_ROUTE}>Produits</Link>
            </li>
            <li>
              <Link href={CHECKOUT_ROUTE}>Panier</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={HOME_ROUTE}>Accueil</Link>
          </li>
          <li>
            <Link href={PRODUCTS_ROUTE}>Produits</Link>
          </li>
          <li>
            <Link href={CHECKOUT_ROUTE}>Panier</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div role="button" className="btn btn-ghost">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />{" "}
            </svg>
            <span className="size-[15px] badge badge-ghost badge-sm indicator-item">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
