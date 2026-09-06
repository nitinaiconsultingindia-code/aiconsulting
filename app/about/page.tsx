import Link from "next/link";

export default function About() {
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

            <Link
              href="/"
              className="hover:opacity-60 transition"
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="hover:opacity-60 transition"
            >
              ABOUT
            </Link>

            <Link
              href="/consulting"
              className="hover:opacity-60 transition"
            >
              CONSULTING
            </Link>

            <Link
              href="/trading"
              className="hover:opacity-60 transition"
            >
              PIPE & TUBE TRADING
            </Link>

            <Link
              href="/contact"
              className="hover:opacity-60 transition"
            >
              CONTACT
            </Link>

          </nav>

        </div>
      </header>


      {/* ABOUT HERO */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

          <div className="max-w-4xl">

            <p className="text-xs font-bold tracking-[4px] uppercase mb-5">
              ABOUT A&I
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Manufacturing Experience That Comes From The Shop Floor
            </h1>

            <div className="mt-7">

              <h2 className="text-2xl md:text-3xl font-bold">
                Nitin Kanodiya
              </h2>

              <p className="mt-2 text-sm md:text-base font-semibold tracking-wide">
                Former Plant Head | Manufacturing Leader
              </p>

            </div>

            <p className="mt-6 text-base md:text-lg leading-7 max-w-3xl text-slate-800">
              With more than 25 years of hands-on manufacturing experience,
              I have worked across tube manufacturing, plant operations,
              engineering, maintenance, automation, greenfield projects and
              manufacturing transformation.
            </p>

            <p className="mt-4 text-base md:text-lg leading-7 max-w-3xl text-slate-800">
              My experience has been built on the shop floor — solving real
              manufacturing problems, improving productivity, reducing costs
              and building reliable production systems.
            </p>

          </div>


          {/* EXPERIENCE BLOCKS */}
          <div className="grid md:grid-cols-2 gap-4 mt-10">

            {/* 01 */}
            <div className="bg-black text-white p-6 md:p-7 rounded-2xl">

              <p className="text-xs font-bold tracking-[3px] text-[#b7e36b]">
                01
              </p>

              <h3 className="text-xl font-bold mt-3">
                Tube Manufacturing
              </h3>

              <p className="mt-2 text-sm text-white/70 leading-6">
                Hands-on experience across tube manufacturing, downstream
                processes, plating, coating and extrusion.
              </p>

            </div>


            {/* 02 */}
            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-black/10">

              <p className="text-xs font-bold tracking-[3px] text-slate-500">
                02
              </p>

              <h3 className="text-xl font-bold mt-3">
                Plant Operations
              </h3>

              <p className="mt-2 text-sm text-slate-700 leading-6">
                Manufacturing leadership covering productivity, quality,
                delivery, cost, maintenance and profitability.
              </p>

            </div>


            {/* 03 */}
            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-black/10">

              <p className="text-xs font-bold tracking-[3px] text-slate-500">
                03
              </p>

              <h3 className="text-xl font-bold mt-3">
                Automation & Technical Expertise
              </h3>

              <p className="mt-2 text-sm text-slate-700 leading-6">
                Experience with PLCs, drives, automation, electroplating,
                extrusion, maintenance and process improvement.
              </p>

            </div>


            {/* 04 */}
            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-black/10">

              <p className="text-xs font-bold tracking-[3px] text-slate-500">
                04
              </p>

              <h3 className="text-xl font-bold mt-3">
                Projects & Improvement
              </h3>

              <p className="mt-2 text-sm text-slate-700 leading-6">
                Greenfield projects, machinery commissioning, CAPEX,
                productivity improvement, OEE and cost reduction.
              </p>

            </div>

          </div>


          {/* A&I PHILOSOPHY */}
          <div className="mt-8 bg-black text-white rounded-2xl p-7 md:p-8">

            <p className="text-xs font-bold tracking-[3px] text-[#b7e36b]">
              A&I PHILOSOPHY
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
              Practical Manufacturing Solutions.
              <br />
              Hands-on Execution.
              <br />
              Sustainable Results.
            </h2>

            <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl leading-6">
              A&I was created to provide manufacturers with practical
              technical expertise, operational improvement support and
              experienced troubleshooting assistance when it matters most.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-[#b7e36b] text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white transition"
            >
              DISCUSS YOUR REQUIREMENT →
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}