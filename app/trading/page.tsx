import Link from "next/link";
import Header from "../components/Header";

export default function Trading() {
  return (
    <main className="min-h-screen bg-[#b7e36b] text-slate-900">

      <Header />

      <section>
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

          {/* INTRO */}
          <div className="max-w-4xl">

            <p className="text-xs font-bold tracking-[4px] uppercase mb-5">
              PIPE & TUBE TRADING
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Industrial Pipe & Tube Sourcing
            </h1>

            <p className="mt-6 text-base md:text-lg leading-7 max-w-3xl text-slate-800">
              We source and supply pipes and tubes to your required
              specification, grade, size and application.
            </p>

          </div>


          {/* PRODUCTS */}
          <div className="grid md:grid-cols-2 gap-4 mt-10">

            <Product
              number="01"
              title="Carbon Steel Pipes & Tubes"
              text="Industrial carbon steel pipe and tube sourcing for manufacturing and engineering applications."
            />

            <Product
              number="02"
              title="Stainless Steel Pipes & Tubes"
              text="Stainless steel products available in required grades, sizes and specifications."
            />

            <Product
              number="03"
              title="Alloy Steel Pipes & Tubes"
              text="Alloy steel pipe and tube sourcing for demanding industrial applications."
            />

            <Product
              number="04"
              title="ERW Pipes & Tubes"
              text="ERW products sourced according to required dimensions, grade and application."
              dark
            />

            <Product
              number="05"
              title="Seamless Pipes & Tubes"
              text="Seamless products for applications requiring specific material and dimensional requirements."
            />

            <Product
              number="06"
              title="Precision Tubes"
              text="Precision tube sourcing for applications requiring tighter dimensional and quality requirements."
            />

            <Product
              number="07"
              title="Boiler & Heat Exchanger Tubes"
              text="Tubes for boiler, heat exchanger and other thermal equipment applications."
            />

            <Product
              number="08"
              title="Special / Custom Requirements"
              text="Support for sourcing special sizes, grades, specifications and application-specific pipe and tube requirements."
              dark
            />

            <Product
              number="09"
              title="Bundy DW Tubes"
              text="Double-wall Bundy tubes for automotive and industrial applications."
            />

            <Product
              number="10"
              title="Bundy SW Tubes"
              text="Single-wall Bundy tubes for required automotive and industrial applications."
            />

          </div>


          {/* CTA */}
          <div className="mt-8 bg-black text-white rounded-2xl p-7 md:p-8">

            <p className="text-xs font-bold tracking-[3px] text-[#b7e36b]">
              NEED PIPE OR TUBE?
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
              Tell us your requirement.
              <br />
              We will source it.
            </h2>

            <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl leading-6">
              Share your required material, grade, size, quantity and
              application. We will help identify the right sourcing option.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-[#b7e36b] text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white transition"
            >
              REQUEST A QUOTE →
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}


function Product({
  number,
  title,
  text,
  dark = false,
}: {
  number: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "bg-black text-white p-6 md:p-7 rounded-2xl"
          : "bg-white/80 p-6 md:p-7 rounded-2xl border border-black/10"
      }
    >

      <p
        className={
          dark
            ? "text-xs font-bold tracking-[3px] text-[#b7e36b]"
            : "text-xs font-bold tracking-[3px] text-slate-500"
        }
      >
        {number}
      </p>

      <h3 className="text-xl font-bold mt-3">
        {title}
      </h3>

      <p
        className={
          dark
            ? "mt-2 text-sm text-white/70 leading-6"
            : "mt-2 text-sm text-slate-700 leading-6"
        }
      >
        {text}
      </p>

    </div>
  );
}