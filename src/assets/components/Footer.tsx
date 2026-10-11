import { useState } from "react";
import type { FormEvent } from "react";
import Button from "./Button";
import { footerLinksLeft, footerLinksRight } from "../data/content";
import { validateEmail } from "../utils/validateEmail";
import logoWhite from "../images/logo-white.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconYoutube from "../images/icon-youtube.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";

const socialIcons = [
  { name: "Facebook", icon: iconFacebook, href: "https://www.facebook.com" },
  { name: "YouTube", icon: iconYoutube, href: "https://www.youtube.com" },
  { name: "Twitter", icon: iconTwitter, href: "https://twitter.com" },
  { name: "Pinterest", icon: iconPinterest, href: "https://www.pinterest.com" },
  { name: "Instagram", icon: iconInstagram, href: "https://www.instagram.com" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationError = validateEmail(email);
    setError(validationError);
    setSuccess(false);

    if (!validationError) {
      setEmail("");
      setSuccess(true);
    }
  }

  return (
    <footer className="bg-gray-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:grid md:grid-cols-4 md:grid-rows-2 md:items-start md:gap-y-6">
        <form id="newsletter" 
          onSubmit={handleSubmit}
          noValidate
          className="order-1 w-full md:order-0 md:col-start-4 md:row-start-1"
        >
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Updates in your inbox…"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`min-w-0 flex-1 rounded-full bg-white px-5 py-3 text-sm text-blue-950 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 ${
                error ? "border-2 border-orange-400" : ""
              }`}
            />
            <Button type="submit">Go</Button>
          </div>
          {error && <p className="mt-2 px-5 text-xs italic text-orange-400">{error}</p>}
          {success && <p className="mt-2 px-5 text-xs text-white">Thanks for signing up!</p>}
        </form>

        <div className="order-2 grid grid-cols-2 gap-x-16 gap-y-4 text-sm md:contents">
          <ul className="flex flex-col gap-4 md:col-start-2 md:row-span-2 md:row-start-1">
            {footerLinksLeft.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-orange-400">{link.label}</a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4 md:col-start-3 md:row-span-2 md:row-start-1">
            {footerLinksRight.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-orange-400">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-3 flex gap-6 md:order-0 md:col-start-1 md:row-start-2 md:self-end">
          {socialIcons.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="hover:opacity-70">
              <img src={social.icon} alt="" className="h-6 w-6 hover:opacity-70" />
            </a>
          ))}
        </div>

        <img
          src={logoWhite}
          alt="Manage"
          className="order-4 h-6 md:order-0 md:col-start-1 md:row-start-1"
        />

        <p className="order-5 text-sm text-gray-400 md:order-0 md:col-start-4 md:row-start-2 md:self-end md:text-right">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
