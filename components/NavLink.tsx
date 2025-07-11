import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  text: string;
}

export default function NavLink({ href, text }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`hover:font-semibold focus:font-semibold ${
        href === pathname && "text-secondary font-semibold"
      }`}
    >
      {text}
    </Link>
  );
}
