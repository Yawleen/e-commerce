import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Mon E-commerce",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Un site e-commerce créé avec Next.js 15 et Stripe !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={"min-w-[320px] min-h-[100vh]"}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
