"use client";

import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-xl font-bold mb-4">Votre panier est vide.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-12 text-center">Panier</h1>
      <div className="max-w-md mx-auto mb-8">
        <h1 className="text-xl font-bold mb-4">Résumé de la commande</h1>
        <ul className="space-y-4 mb-4">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col gap-2 border-b pb-6">
              <div className="flex justify-between">
                <span className="font-medium">{item.name}</span>
                <span className="font-semibold">
                  {((item.price * item.quantity) / 100).toFixed(2)} €
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  –
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  className="btn btn-sm"
                  onClick={() => addItem({ ...item, quantity: 1 })}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-lg font-semibold">
          Total : {(total / 100).toFixed(2)} €
        </div>
      </div>
      <form className="flex flex-col max-w-md mx-auto" action={checkoutAction}>
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <button type="submit" className="btn mb-3">
          Procéder au paiement
        </button>
        <button
          className="btn border-none bg-secondary"
          onClick={() => clearCart()}
        >
          Vider le panier
        </button>
      </form>
    </div>
  );
}
