import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* HEADER */}
      <header className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP HEADER */}
          <div className="h-[70px] flex items-center justify-between">

            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight"
            >
              A&I
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-bold">

              <Link href="/" className="hover:opacity-60 transition">
                HOME
              </Link>

              <Link href="/about" className="hover:opacity-60 transition">
                ABOUT
              </Link>

              <Link href="/consulting" className="hover:opacity-60 transition">
                CONSULTING
              </Link>

              <Link
                href="/trading"
                className="hover:opacity-60 transition"
              >
                BUNDY TUBE & SPECIAL PIPES SUPPLY
              </Link>

              <Link href="/contact" className="hover:opacity-60 transition">
                CONTACT
              </Link>

            </nav>

          </div>

          {/* MOBILE NAVIGATION */}
          <nav className="md:hidden flex items-center gap-5 pb-4 overflow-x-auto whitespace-nowrap text-[11px] font-bold tracking-wide">

            <Link href="/" className="hover:opacity-60 transition">
              HOME
            </Link>

            <Link href="/about" className="hover:opacity-60 transition">
              ABOUT
            </Link>

            <Link href="/consulting" className="hover:opacity-60 transition">
              CONSULTING
            </Link>

            <Link href="/trading" className="hover:opacity-60 transition">
              BUNDY TUBE & SPECIAL PIPES SUPPLY
            </Link>

            <Link href="/contact" className="hover:opacity-60 transition">
              CONTACT
            </Link>

          </nav>

        </div>
      </header>


      {/* GLOBAL FLOATING CONTACT BUTTONS */}

      {/* DESKTOP */}
      <div className="hidden md:flex fixed right-5 top-[82px] z-50 flex-col items-end gap-2">

        <a
          href="tel:+919727156382"
          className="bg-black text-[#b7e36b] px-5 py-3 rounded-full text-xs font-extrabold shadow-lg hover:scale-105 transition"
        >
          📞 CALL ME BACK
        </a>

        <a
          href="https://wa.me/919727156382"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-5 py-3 rounded-full text-xs font-extrabold shadow-lg hover:scale-105 transition"
        >
          💬 WHATSAPP
        </a>

        <a
          href="mailto:nitin.aiconsulting.india@gmail.com"
          className="bg-white text-slate-900 px-5 py-3 rounded-full text-xs font-extrabold shadow-lg hover:scale-105 transition"
        >
          ✉ EMAIL
        </a>

      </div>


      {/* MOBILE */}
      <div className="md:hidden fixed right-3 bottom-4 z-50 flex flex-col items-end gap-2">

        <a
          href="tel:+919727156382"
          className="bg-black text-[#b7e36b] px-4 py-2.5 rounded-full text-[10px] font-extrabold shadow-lg"
        >
          📞 CALL ME BACK
        </a>

        <a
          href="https://wa.me/919727156382"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-4 py-2.5 rounded-full text-[10px] font-extrabold shadow-lg"
        >
          💬 WHATSAPP
        </a>

        <a
          href="mailto:nitin.aiconsulting.india@gmail.com"
          className="bg-white text-slate-900 px-4 py-2.5 rounded-full text-[10px] font-extrabold shadow-lg"
        >
          ✉ EMAIL
        </a>

      </div>
    </>
  );
}