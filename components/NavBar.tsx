"use client";

import Link from "next/link";
import { HOME_ROUTE, PRODUCTS_ROUTE, CHECKOUT_ROUTE } from "@/routes";
import NavLink from "./NavLink";
import { useCartStore } from "@/store/cart-store";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const { items } = useCartStore();
  const cartModal = useRef<HTMLDivElement>(null);
  const [showCartContent, setShowCartContent] = useState<boolean>(false);
  const cartCount = items.reduce((acc, item) => item.quantity + acc, 0);

  const toggleCart = () => setShowCartContent(!showCartContent);
  const closeCart = () => setShowCartContent(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!cartModal?.current?.contains(e.target as Node)) {
        closeCart();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar px-4 shadow z-999">
      <div className="navbar-start">
        <div className="hidden lg:block">
          <Link href={HOME_ROUTE}>Mon E-Commerce</Link>
        </div>
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="pointer">
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
            className="menu menu-m dropdown-content border border-gray-600 bg-gray-100 bg-white rounded-box border z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink href={HOME_ROUTE} text="Accueil" />
            </li>
            <li>
              <NavLink href={PRODUCTS_ROUTE} text="Produits" />
            </li>
            <li>
              <NavLink href={CHECKOUT_ROUTE} text="Panier" />
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink href={HOME_ROUTE} text="Accueil" />
          </li>
          <li>
            <NavLink href={PRODUCTS_ROUTE} text="Produits" />
          </li>
          <li>
            <NavLink href={CHECKOUT_ROUTE} text="Panier" />
          </li>
        </ul>
      </div>
      <div ref={cartModal} className="relative navbar-end">
        <div onClick={toggleCart} role="button" className="cursor-pointer">
          <span className="indicator">
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
            {cartCount > 0 && (
              <span className="size-[15px] text-xs font-bold badge badge-outline badge-sm indicator-item">
                {cartCount}
              </span>
            )}
          </span>
        </div>

        {showCartContent && (
          <div
            className="absolute rounded top-7 -right-4 w-screen max-w-sm border border-gray-600 bg-white px-4 py-8 sm:px-6 lg:px-8 z-999"
            aria-modal="true"
            role="dialog"
          >
            <button
              onClick={toggleCart}
              className="absolute end-4 top-4 text-gray-600 transition hover:scale-110 cursor-pointer"
            >
              <span className="sr-only">Fermer</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mt-4 space-y-6">
              <ul className="flex flex-col gap-x-4 space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <img
                      src={
                        item.imageUrl ??
                        "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png"
                      }
                      alt={item.name}
                      className="size-16 rounded-sm object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">{item.name}</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Prix : </dt>
                          <dd className="inline">
                            {(item.price / 100).toFixed(2)} €
                          </dd>
                        </div>

                        <div>
                          <dt className="inline">Quantité : </dt>
                          <dd className="inline">{item.quantity}</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 text-center">
                <Link
                  onClick={closeCart}
                  href={CHECKOUT_ROUTE}
                  className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                >
                  Voir panier ({cartCount})
                </Link>

                <p
                  onClick={closeCart}
                  className="text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600 cursor-pointer"
                >
                  Continuer les achats
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
