import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#b7e36b] text-slate-900">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

          <div className="max-w-6xl">

            {/* MAIN HEADING */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.02]">
              A&I Consultancy Services
            </h1>

            {/* SERVICE AREAS */}
            <div className="mt-7 space-y-1">

              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                Tube Manufacturing Process Solutions
              </p>

              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                Reel-to-Reel Plating Process Solutions
              </p>

              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                Multistrand Tube Plating Process Solutions
              </p>

              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                Bundy Tube & Special Tube Sourcing Solutions
              </p>

            </div>

          </div>


          {/* MAIN SERVICES */}
          <div className="grid md:grid-cols-2 gap-5 mt-10">

            {/* CONSULTING */}
            <div className="bg-white/80 p-7 md:p-8 rounded-2xl border border-black/10">

              <p className="text-xs font-bold tracking-[3px] text-slate-500">
                01 — CONSULTING
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-5 leading-tight">
                Senior Plant Performance and Technical Improvement Support
              </h2>

              <Link
                href="/consulting"
                className="inline-block mt-7 bg-black text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition"
              >
                EXPLORE CONSULTING →
              </Link>

            </div>


            {/* TRADING */}
            <div className="bg-white/80 p-7 md:p-8 rounded-2xl border border-black/10">

              <p className="text-xs font-bold tracking-[3px] text-slate-500">
                02 — BUNDY & SPECIAL PIPE TRADING
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-5 leading-tight">
                Bundy Tubing and Special Tube/Pipe Sourcing
              </h2>

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

    </main>
  );
}