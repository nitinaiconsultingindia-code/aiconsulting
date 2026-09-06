import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#b7e36b] text-slate-900">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">

          <div className="max-w-5xl">

            <p className="text-xs font-bold tracking-[4px] uppercase mb-6">
              A & I
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.02] max-w-5xl">
              Continuous Tube / Pipe / Wire / Cable Industry Expert
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 max-w-3xl">
              Technical expertise, operational improvement and reliable
              industrial sourcing for continuous manufacturing industries.
            </p>

          </div>


          {/* MAIN SERVICES */}
          <div className="grid md:grid-cols-2 gap-5 mt-10">

            {/* CONSULTING */}
            <div className="bg-black text-white p-7 md:p-8 rounded-2xl">

              <p className="text-xs font-bold tracking-[3px] text-[#b7e36b]">
                01 — CONSULTING
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-5 leading-tight">
                EBITDA Improvement & Emergency Technical Support
              </h2>

              <p className="mt-5 text-base md:text-lg text-white/75 leading-7">
                We help tube & pipe manufacturers improve profitability,
                productivity and operational performance — and provide rapid
                technical support when critical problems arise.
              </p>

              <Link
                href="/consulting"
                className="inline-block mt-7 bg-[#b7e36b] text-black px-5 py-3 rounded-full text-sm font-bold hover:bg-white transition"
              >
                EXPLORE CONSULTING →
              </Link>

            </div>


            {/* TRADING */}
            <div className="bg-white/80 p-7 md:p-8 rounded-2xl border border-black/10">

              <p className="text-xs font-bold tracking-[3px] text-slate-500">
                02 — PIPE & TUBE TRADING
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-5 leading-tight">
                Industrial Pipe & Tube Sourcing
              </h2>

              <p className="mt-5 text-base md:text-lg text-slate-700 leading-7">
                We source and supply pipes and tubes to your required
                specification, grade, size and application.
              </p>

              <Link
                href="/trading"
                className="inline-block mt-7 bg-black text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition"
              >
                REQUEST A QUOTE →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* FOOTER STRIP */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

          <p className="text-sm md:text-base font-semibold">
            Technical Expertise • Operational Improvement • Reliable Sourcing
          </p>

          <Link
            href="/contact"
            className="bg-[#b7e36b] text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition"
          >
            CONTACT US →
          </Link>

        </div>
      </section>

    </main>
  );
}