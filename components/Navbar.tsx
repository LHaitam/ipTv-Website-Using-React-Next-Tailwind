"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.webp" alt="logo" width={110} height={50} loading="lazy"/>
      </Link>

      <div className="lg:flex hidden">
        <ul className={`hidden h-full gap-12 lg:flex flex text-black`}>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="regular-16 text-gray-50">
              <Link href={link.href} className="flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold text-black">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>


      </div>

      <div className="lg:flexCenter hidden">
        <Link href="/#Pricing">
          <Button
            type="button"
            title="Order"
            variant="btn_dark_green"
            aria-label="Place Order"
          />
        </Link>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMobileMenu}
      />

      {isMobileMenuOpen && (
        <div className="lg:hidden w-full absolute bottom-0 left-0 " style={{ top: 'calc(100% - 0rem)' }}> {/* Ajustement de la position verticale de la liste */}
          <ul className="flex flex-col justify-center items-center gap-4 bg-white"> {/* Modification de la classe pour afficher les éléments en colonne */}
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar;
