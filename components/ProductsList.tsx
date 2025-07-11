"use client";

import { ChangeEvent, useState } from "react";
import Stripe from "stripe";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: Stripe.Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().trim().includes(searchTerm.toLowerCase())
  );

  const onSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  if (products.length === 0) {
    return (
      <p className="min-h-60 sm:min-h-80 text-center font-bold text-lg sm:text-xl">
        Aucun produit pour le moment.
      </p>
    );
  }

  return (
    <>
      <div className="w-full max-w-xl mx-auto mb-8">
        <div className="flex p-2 rounded-sm border shadow-sm">
          <input
            value={searchTerm}
            onChange={onSearch}
            type="search"
            placeholder="Rechercher des produits..."
            className="pl-2 grow sm:text-sm"
          />

          <span className="inset-y-0 grid w-8 place-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </div>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="min-h-60 sm:min-h-80 text-center font-bold text-lg sm:text-xl">
          Aucun résultat pour &quot;{searchTerm}&quot;.
        </p>
      )}
    </>
  );
}
