import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#b7e36b] text-slate-900">

      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

          {/* TITLE */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
              A&I Consultancy Services
            </h1>

            <p className="mt-4 text-base md:text-lg font-semibold">
              Practical technical, operational and sourcing support for
              manufacturing businesses and new ventures.
            </p>
          </div>


          {/* SERVICES */}
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-6 mt-9">

            {/* COLUMN 1 */}
            <div className="space-y-5">

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Tube Manufacturing
                  <br />
                  Process Solutions
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Reel-to-Reel Plating
                  <br />
                  Process Solutions
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Multistrand Tube Plating
                  <br />
                  Process Solutions
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Bundy Tube & Special
                  <br />
                  Tube Sourcing Solutions
                </p>
              </div>

            </div>


            {/* COLUMN 2 */}
            <div className="space-y-5">

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Part-time Support to Management
                  <br />
                  to Run / Review Plant
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Performance Improvement
                  <br />
                  All Continuous Processes
                  <br />
                  (wire, cable etc.)
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Webpage Designing and Consultancy
                  <br />
                  Support for New Start-up/Business
                </p>
              </div>

            </div>


            {/* COLUMN 3 */}
            <div className="space-y-5">

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Technical Troubleshooting
                  <br />
                  <span className="font-medium text-sm md:text-base">
                    for Production Line / Equipment
                  </span>
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Project/Line Commissioning Support
                  <br />
                  <span className="font-medium text-sm md:text-base">
                    for New and Existing Plants
                  </span>
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-green-700 text-2xl leading-none">
                  •
                </span>
                <p className="text-base md:text-lg font-bold leading-tight">
                  Material Localisation Support
                  <br />
                  <span className="font-medium text-sm md:text-base">
                    & Sourcing
                  </span>
                </p>
              </div>

            </div>

          </div>


          {/* MAIN BUSINESS AREAS */}
          <div className="grid md:grid-cols-2 gap-5 mt-12">

            {/* CONSULTING */}
            <div className="bg-white/80 p-7 md:p-8 rounded-2xl border border-black/10">

              <p className="text-xs font-bold tracking-[3px] text-slate-500">
                01 — CONSULTING
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-5 leading-tight">
                Senior Plant Performance and Technical Improvement Support
              </h2>

              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                Technical and operational support for tube, plating,
                wire, cable and other continuous manufacturing processes.
              </p>

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

              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                Sourcing and supply support for Bundy tubes, precision
                tubes, special pipes and other industrial materials.
              </p>

              <Link
                href="/trading"
                className="inline-block mt-7 bg-black text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition"
              >
                REQUEST A QUOTE →
              </Link>

            </div>

          </div>


          {/* BOTTOM TAGLINE */}
          <div className="mt-10 border-t border-black/20 pt-6">

            <p className="text-sm md:text-base font-bold tracking-[2px]">
              YOUR PARTNER IN EFFICIENT, SUSTAINABLE & GROWTH-DRIVEN OPERATIONS
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}