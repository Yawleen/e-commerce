"use client";

import Stripe from "stripe";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  products: Stripe.Product[];
}

export default function Carousel({ products }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);
  const currentProduct = products[current];
  const price = currentProduct?.default_price as Stripe.Price;

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % products.length),
      3000
    );

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="relative h-60 sm:h-80">
      <div className="absolute left-[50%] top-[50%] -translate-[50%] text-center z-1">
        <p className="text-lg sm:text-xl font-bold drop-shadow-[2px_1px_0_rgba(255,255,255,0.8)]">
          {currentProduct.name}
        </p>
        {price && price.unit_amount && (
          <p className="font-semibold drop-shadow-[2px_1px_0_rgba(255,255,255,0.8)]">
            {(price.unit_amount / 100).toFixed(2)} €
          </p>
        )}
      </div>
      <Image
        src={currentProduct.images[0]}
        alt={currentProduct.name}
        fill
        objectFit="contain"
        className="transition-opacity duration-500 ease-in-out"
      />
    </div>
  );
}
