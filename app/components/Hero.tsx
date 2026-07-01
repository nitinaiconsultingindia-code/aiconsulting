import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Wrench,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[6px] text-red-500 font-bold text-sm mb-5">
              A&I CONSULTING
            </p>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">

              Solving
              <br />

              Manufacturing
              <br />

              Problems

            </h1>

            <h2 className="mt-5 text-2xl lg:text-3xl font-semibold text-gray-200 leading-relaxed">

              On the Shop Floor...
              <br />
              Not Just in the Boardroom.

            </h2>

            <p className="mt-8 text-xl text-red-400 font-semibold">

              Practical Manufacturing Solutions.
              <br />
              Hands-on Execution.
              <br />
              Sustainable Results.

            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3 text-lg">

                <Factory className="w-5 h-5 text-red-500" />

                Production • Operations • Greenfield Projects

              </div>

              <div className="flex items-center gap-3 text-lg">

                <Wrench className="w-5 h-5 text-red-500" />

                Maintenance • Automation • Electroplating

              </div>

              <div className="flex items-center gap-3 text-lg">

                <TrendingUp className="w-5 h-5 text-red-500" />

                Productivity • Cost Reduction • Profitability

              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-lg font-bold flex items-center gap-2"
              >
                Book Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="border border-gray-500 hover:border-white px-7 py-3 rounded-lg font-bold transition"
              >
                Explore Solutions
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <Image
              src="/nitin.jpg"
              alt="Nitin Kanodiya"
              width={320}
              height={400}
              priority
              className="rounded-2xl border-2 border-red-600 shadow-2xl object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}