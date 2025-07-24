"use client";

import React from "react";
import Link from "next/link";

const footerData = {
  brand: {
    name: "BERNICE BAKERY",
    address: ["5135 Notre-Dame Ouest", "Montréal, QC H4C 1T4"],
    contact: {
      email: "bonjour@bernicebakery.com",
      phone: "(514) 931-8444",
      phoneHref: "+15149318444",
    },
    social: {
      instagram: "https://instagram.com/bernicebakery",
    },
  },
  links: {
    navigation: [
      { label: "Cookies", href: "/cookies" },
      { label: "Cakes", href: "/cakes" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Terms of use", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
    ],
  },
  newsletter: {
    cta: "GET 15% OFF YOUR FIRST ORDER",
    button: "JOIN",
  },
  footer: {
    copyright: "Copyright 2025 | Bernice Bakery",
    madeBy: "Made by Casa Media",
  },
};

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add newsletter signup logic here
    console.log("Newsletter signup submitted");
  };

  return (
    <footer className="bg-[#147c98] pt-25 pb-0 text-neutral-50 w-full select-none">
      <div className="w-[90vw] mx-auto px-4 flex flex-col gap-1">
        {/* Top section: columns */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full">
          {/* Branding & Contact */}
          <div className="flex-1 min-w-[220px] space-y-4 max-w-full md:max-w-none md:mx-0 mx-auto w-full md:w-auto">
            <span className="block font-black text-3xl md:text-4xl tracking-tight uppercase text-neutral-50">
              {footerData.brand.name}
            </span>
            <div className="text-base font-bold leading-tight text-neutral-50 space-y-1">
              <div className="block">
                {footerData.brand.address.map((line: string, i: number) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <a
                href={`mailto:${footerData.brand.contact.email}`}
                className="block underline hover:text-pink-200 transition-colors"
                aria-label={`Send email to ${footerData.brand.contact.email}`}
              >
                {footerData.brand.contact.email}
              </a>
              <a
                href={`tel:${footerData.brand.contact.phoneHref}`}
                className="block underline hover:text-pink-200 transition-colors"
                aria-label={`Call ${footerData.brand.contact.phone}`}
              >
                {footerData.brand.contact.phone}
              </a>
            </div>

            <a
              href={footerData.brand.social.instagram}
              className="block hover:text-pink-200 transition-colors font-bold text-neutral-50"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              Follow us on Instagram
            </a>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex-1 flex flex-col items-start md:items-center justify-center min-w-[220px] mt-6 md:mt-0 max-w-full md:max-w-none md:mx-0 mx-auto w-full md:w-auto h-full"
          >
            <ul className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-x-16 md:gap-x-30 md:gap-y-4 font-black text-base md:text-lg uppercase">
              {footerData.links.navigation.map(
                (item: { label: string; href: string }) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-pink-200 transition-colors text-neutral-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="flex-1 w-full flex flex-col items-center md:items-end mt-6 md:mt-0 max-w-full md:max-w-none md:mx-0 mx-auto">
            <div className="w-full flex flex-col items-center md:items-end">
              <span className="font-extrabold md:text-3xl uppercase leading-tight tracking-tight text-center md:text-right mb-4 text-neutral-50 w-full whitespace-nowrap">
                {footerData.newsletter.cta}
              </span>

              <form
                className="w-full"
                aria-label="Newsletter signup"
                onSubmit={handleNewsletterSubmit}
              >
                <div className="w-full flex gap-2">
                  <input
                    type="email"
                    required
                    aria-label="Email address for newsletter"
                    placeholder="EMAIL"
                    className="flex-1 rounded-full px-4 py-3 bg-[#ffa7ee] text-white font-extrabold text-base placeholder-white uppercase focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-[#147c98]"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-neutral-900 text-white font-extrabold text-base px-6 py-3 hover:bg-neutral-700 transition-colors uppercase whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                    aria-label="Join newsletter"
                  >
                    {footerData.newsletter.button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* BERNICE giant word */}
        <div className="w-[90vw] mx-auto px-4">
          <h2
            className="font-black tracking-tight text-[min(20vw,25rem)] leading-none text-neutral-100 uppercase text-center -mb-4"
            aria-label="Bernice"
            tabIndex={0}
          >
            BERNICE
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-2 py-3 text-neutral-100 text-lg font-semibold text-left">
          <div>{footerData.footer.copyright}</div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2">
            <Link
              href={footerData.links.legal[0].href}
              className="hover:text-pink-200 cursor-pointer underline transition-colors"
            >
              {footerData.links.legal[0].label}
            </Link>
            <span className="hidden md:inline">|</span>
            <Link
              href={footerData.links.legal[1].href}
              className="hover:text-pink-200 cursor-pointer underline transition-colors"
            >
              {footerData.links.legal[1].label}
            </Link>
          </div>
          <div>{footerData.footer.madeBy}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
