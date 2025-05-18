import { stripe } from "@/lib/stripe";
import ProductsList from "@/components/ProductsList";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-16 px-8 sm:px-10">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-10 text-center">
        Nos produits
      </h1>
      <ProductsList products={products.data} />
    </div>
  );
}
