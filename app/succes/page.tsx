"use client";

import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/routes";
import { useEffect } from "react";
import { useCartStore } from "@/store/cart-store";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Paiement réussi !</h1>
      <p className="mb-4">
        Merci pour votre achat. Votre commande sera traitée dans les meilleurs
        délais.
      </p>

      <Link className="text-secondary hover:underline" href={PRODUCTS_ROUTE}>
        Continuer les achats
      </Link>
    </div>
  );
}
