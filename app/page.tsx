import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#b7e36b] text-slate-900">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-14">

          {/* BRAND + CORE SERVICES */}
          <div className="max-w-6xl">

            {/* BRAND */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              A&I Consultancy Services
            </h1>

            {/* CORE SERVICE POSITIONING */}
            <div className="space-y-1">

              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Tube Manufacturing Process Solutions
              </p>

              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Reel-to-Reel Plating Process Solutions
              </p>

              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Multistrand Tube Plating Process Solutions
              </p>

              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Bundy Tube & Special Tube Sourcing Solutions
              </p>

            </div>

          </div>


          {/* MAIN SERVICES */}
          <div className="grid md:grid-cols-2 gap-5 mt-12">

            {/* CONSULTING */}
            <div className="bg-black text-white p-7 md:p-8 rounded-2xl">

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-[#b7e36b]">
                01 — CONSULTING
              </h2>

              <p className="mt-4 text-lg md:text-xl text-white/85 leading-7">
                Senior Plant Performance and Technical Improvement Support
              </p>

              <Link
                href="/consulting"
                className="inline-block mt-7 bg-[#b7e36b] text-black px-5 py-3 rounded-full text-sm font-bold hover:bg-white transition"
              >
                EXPLORE CONSULTING →
              </Link>

            </div>


            {/* BUNDY TUBING & PIPE TRADING */}
            <div className="bg-white/80 p-7 md:p-8 rounded-2xl border border-black/10">

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-slate-900">
                02 — BUNDY TUBING & PIPE TRADING
              </h2>

              <p className="mt-4 text-lg md:text-xl text-slate-700 leading-7">
                Bundy Tubing and Special Tube/Pipe Sourcing
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

    </main>
  );
}