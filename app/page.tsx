"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#b7e36b] text-slate-900">

      {/* HEADER */}
      <header className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            A&I
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
            <Link href="/" className="hover:opacity-60 transition">
              HOME
            </Link>

            <Link href="/consulting" className="hover:opacity-60 transition">
              CONSULTING
            </Link>

            <Link href="/trading" className="hover:opacity-60 transition">
              PIPE & TUBE TRADING
            </Link>

            <Link href="/contact" className="hover:opacity-60 transition">
              CONTACT
            </Link>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <section className="flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 py-10 md:py-14">

          <div className="max-w-4xl">

            <p className="text-xs font-bold tracking-[4px] uppercase mb-5">
              A&I
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.0]">
              Continuous Tube / Pipe / Wire / Cable Industry Expert
            </h1>

            <p className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed text-slate-800">
              Technical expertise, operational improvement and reliable
              industrial sourcing for continuous manufacturing industries.
            </p>

          </div>


          {/* TWO BUSINESS AREAS */}
          <div className="grid md:grid-cols-2 gap-5 mt-8">

            {/* CONSULTING */}
            <div className="bg-black text-white p-6 md:p-7 rounded-2xl">

              <p className="text-xs font-bold tracking-[3px] text-[#b7e36b]">
                01 — CONSULTING
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
                EBITDA Improvement & Emergency Technical Support
              </h2>

              <p className="mt-4 text-sm md:text-base text-white/70 leading-6">
                We help tube & pipe manufacturers improve profitability,
                productivity and operational performance — and provide rapid
                technical support when critical problems arise.
              </p>

              <Link
                href="/consulting"
                className="inline-block mt-6 bg-[#b7e36b] text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white transition"
              >
                EXPLORE CONSULTING →
              </Link>

            </div>


            {/* TRADING */}
            <div className="bg-white/80 backdrop-blur p-6 md:p-7 rounded-2xl border border-black/10">

              <p className="text-xs font-bold tracking-[3px] text-slate-600">
                02 — PIPE & TUBE TRADING
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
                Industrial Pipe & Tube Sourcing
              </h2>

              <p className="mt-4 text-sm md:text-base text-slate-700 leading-6">
                We source and supply pipes and tubes to your required
                specification, grade, size and application.
              </p>

              <Link
                href="/trading"
                className="inline-block mt-6 bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition"
              >
                REQUEST A QUOTE →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* BOTTOM STRIP */}
      <section className="bg-black text-white">

        <div className="max-w-7xl mx-auto px-6 py-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <p className="text-xs md:text-sm font-semibold tracking-wide">
              Technical Expertise • Operational Improvement • Reliable Sourcing
            </p>

            <Link
              href="/contact"
              className="inline-block bg-[#b7e36b] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white transition"
            >
              CONTACT US →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}