"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", newTab: false },
    { label: "Clock", href: "/clock", newTab: false },
    { label: "Devices", href: "/devices", newTab: false },
    { label: "Credits", href: "/credits", newTab: false },
    {
      label: "Source",
      href: "https://github.com/aervnu/aervnu.moe",
      newTab: true,
    },
    { label: "Hastebin", href: "https://hastebin.aervnu.moe", newTab: true },
  ];

  return (
    <nav className="flex flex-row gap-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`no-underline ${
            pathname === item.href
              ? "font-bold dark:text-white text-black"
              : "dark:text-gray-400 text-gray-600"
          }`}
          target={item.newTab ? "_blank" : ""}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
