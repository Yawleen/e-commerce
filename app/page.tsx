import { stripe } from "@/lib/stripe";
import { PRODUCTS_ROUTE } from "@/routes";
import Link from "next/link";
import Carousel from "@/components/Carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div className="max-w-5xl mx-auto shadow-lg">
      <section className="bg-gray-900">
        <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold sm:text-4xl text-white">
              Bienvenue sur
              <strong className="block text-secondary"> Mon E-Commerce </strong>
            </h1>

            <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-200">
              Découvrez les derniers produits au meilleur prix.
            </p>

            <Link
              className="btn bg-secondary sm:btn-lg rounded transition-colors hover:bg-secondary/70"
              href={PRODUCTS_ROUTE}
            >
              Découvrir
            </Link>
          </div>
        </div>
      </section>
      <section>
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
