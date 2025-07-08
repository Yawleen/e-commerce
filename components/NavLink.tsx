import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
}

export default function NavLink({ href, text }: NavLinkProps) {
  return (
    <Link href={href} className="hover:font-semibold focus:font-semibold active:text-secondary">
      {text}
    </Link>
  );
}
