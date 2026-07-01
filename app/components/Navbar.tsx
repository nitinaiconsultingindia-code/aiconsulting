"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center px-6 py-5">

          {/* Logo */}

          <Link href="/">

            <div>

              <h1 className="text-2xl font-extrabold text-slate-900">
                A&amp;I Consulting
              </h1>

              <p className="text-xs tracking-[3px] uppercase text-red-600 font-semibold mt-1">
                Practical Manufacturing Solutions
              </p>

            </div>

          </Link>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-8">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-semibold text-slate-700 hover:text-red-600 transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold transition"
            >
              Book Consultation
            </Link>

          </nav>

          {/* Mobile */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {open && (
          <div className="lg:hidden border-t">

            <div className="flex flex-col p-6 space-y-5">

              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-semibold text-slate-700"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-red-600 text-white text-center py-3 rounded-lg font-semibold"
              >
                Book Consultation
              </Link>

            </div>

          </div>
        )}

      </div>

    </header>
  );
}