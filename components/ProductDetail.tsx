import Image from "next/image";
import Stripe from "stripe";

interface IProductDetailProps {
  product: Stripe.Product;
}

export default function ProductDetail({ product }: IProductDetailProps) {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 px-4 w-full max-w-4xl mx-auto">
      <div className="relative min-w-[250px] w-[30%] h-100">
        <Image
          src={
            product.images[0] ??
            "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png"
          }
          alt={product.name}
          fill
          style={{ objectFit: "contain" }}
          sizes="100%"
          className="transition-opacity duration-500 ease-in-out"
        />
      </div>
      <div className="w-[50%]">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        {product.description && (
          <p className="text-gray-700 mb-4">{product.description}</p>
        )}

        {price && price.unit_amount && (
          <p className="text-lg font-semibold text-gray-900">
            {(price.unit_amount / 100).toFixed(2)} €
          </p>
        )}

        <div className="flex items-center mt-4 gap-3">
          <button className="btn btn-sm">-</button>
          <span className="text-sm font-semibold">0</span>
          <button className="btn btn-sm">+</button>
        </div>
      </div>
    </div>
  );
}
