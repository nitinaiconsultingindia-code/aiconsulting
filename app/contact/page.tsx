import Header from "../components/Header";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#b7e36b] text-slate-900">

      <Header />

      {/* CONTACT HERO */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

          <div className="max-w-5xl">

            <p className="text-xs font-bold tracking-[4px] uppercase mb-5">
              A & I
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.02]">
              Let's Discuss Your Requirement
            </h1>

            <p className="mt-5 text-base md:text-lg leading-7 max-w-4xl text-slate-800">
              Whether you need technical support, operational improvement,
              machinery assistance, or pipe & tube sourcing, tell us what
              you need.
            </p>

          </div>


          {/* REQUIREMENT TYPES */}
          <div className="grid md:grid-cols-2 gap-3 mt-8">

            {/* CONSULTING */}
            <div className="bg-black text-white p-6 md:p-7 rounded-2xl">

              <p className="text-xs font-bold tracking-[4px] text-[#b7e36b]">
                CONSULTING
              </p>

              <p className="mt-4 text-base md:text-lg font-medium">
                Technical problem • Mill issue • Automation • Process
                improvement • New machinery
              </p>

            </div>


            {/* TRADING */}
            <div className="bg-white/80 border border-black/10 p-6 md:p-7 rounded-2xl">

              <p className="text-xs font-bold tracking-[4px] text-slate-500">
                PIPE & TUBE TRADING
              </p>

              <p className="mt-4 text-base md:text-lg font-medium">
                Product requirement • Specification • Grade • Size • Quantity
              </p>

            </div>

          </div>


          {/* CONTACT DETAILS */}
          <div className="grid md:grid-cols-3 gap-3 mt-3">

            {/* MOBILE */}
            <div className="bg-white/80 border border-black/10 p-6 md:p-7 rounded-2xl">

              <p className="text-xs font-bold tracking-[4px] text-slate-500">
                MOBILE / WHATSAPP
              </p>

              <p className="mt-4 text-xl md:text-2xl font-extrabold">
                +91 97271 56382
              </p>

              <a
                href="https://wa.me/919727156382"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-bold underline"
              >
                CHAT ON WHATSAPP →
              </a>

            </div>


            {/* CONSULTING EMAIL */}
            <div className="bg-white/80 border border-black/10 p-6 md:p-7 rounded-2xl">

              <p className="text-xs font-bold tracking-[4px] text-slate-500">
                CONSULTING EMAIL
              </p>

              <a
                href="mailto:nitin.aiconsulting.india@gmail.com"
                className="block mt-5 text-sm md:text-base font-extrabold break-all hover:underline"
              >
                nitin.aiconsulting.india@gmail.com
              </a>

            </div>


            {/* TRADING EMAIL */}
            <div className="bg-white/80 border border-black/10 p-6 md:p-7 rounded-2xl">

              <p className="text-xs font-bold tracking-[4px] text-slate-500">
                TRADING EMAIL
              </p>

              <a
                href="mailto:aiflextubing@gmail.com"
                className="block mt-5 text-sm md:text-base font-extrabold break-all hover:underline"
              >
                aiflextubing@gmail.com
              </a>

            </div>

          </div>


          {/* DIRECT CONTACT */}
          <div className="mt-3 bg-black text-white rounded-2xl p-7 md:p-8 min-h-[300px] md:min-h-[390px] flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>

              <p className="text-xs font-bold tracking-[4px] text-[#b7e36b]">
                DIRECT CONTACT
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-4">
                Technical Expertise. Practical Solutions.
              </h2>

              <p className="mt-3 text-sm text-white/70">
                Tube • Pipe • Wire • Cable Manufacturing
              </p>

            </div>


            <div className="flex flex-wrap gap-3">

              <a
                href="mailto:nitin.aiconsulting.india@gmail.com"
                className="bg-[#b7e36b] text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition"
              >
                EMAIL US →
              </a>

              <a
                href="https://wa.me/919727156382"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-[#b7e36b] transition"
              >
                WHATSAPP →
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}