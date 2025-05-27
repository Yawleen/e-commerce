import Image from "next/image";
import Stripe from "stripe";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/routes";

interface ProductCardProps {
  product: Stripe.Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`${PRODUCTS_ROUTE}/${product.id}`}>
      <div className="card bg-white shadow-lg border-gray-300">
        <figure className="relative w-full h-80">
          <Image
            src={
              product.images[0] ??
              "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png"
            }
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="100%"
            className="transition-opacity duration-500 ease-in-out"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          {price && price.unit_amount && (
            <p className="font-semibold">
              {(price.unit_amount / 100).toFixed(2)} €
            </p>
          )}
          {product.description && (
            <p className="line-clamp-3">{product.description}</p>
          )}
          <button className="btn self-end mt-2">Acheter</button>
        </div>
      </div>
    </Link>
  );
}
