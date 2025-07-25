"use server";

import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/cart-store";
import { redirect } from "next/navigation";
import { CHECKOUT_ROUTE } from "@/routes";

export const checkoutAction = async (formData: FormData): Promise<void> => {
    const itemsJson = formData.get("items") as string;
    const items = JSON.parse(itemsJson);
    const line_items = items.map((item: CartItem) => ({
        price_data: {
            currency: "eur",
            product_data: { name: item.name },
            unit_amount: item.price,
        },
        quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/succes`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}${CHECKOUT_ROUTE}`,
    });

    redirect(session.url!);
};