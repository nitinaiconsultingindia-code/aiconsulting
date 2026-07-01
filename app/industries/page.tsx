import Link from "next/link";
import {
  Car,
  Factory,
  Cog,
  Cpu,
  Wrench,
  Building2,
  Cable,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Car,
    title: "Automotive & Auto Components",
    description:
      "Supporting OEMs and Tier-1/Tier-2 suppliers in improving productivity, quality, maintenance, cost reduction and operational excellence.",
  },
  {
    icon: Factory,
    title: "Steel & Metal Processing",
    description:
      "Improving manufacturing performance, process stability, productivity and quality across metal processing operations.",
  },
  {
    icon: Cog,
    title: "Electroplating & Surface Treatment",
    description:
      "Copper and zinc electroplating process optimisation, defect reduction, quality improvement and new line implementation.",
  },
  {
    icon: Cpu,
    title: "Engineering Manufacturing",
    description:
      "Supporting engineering companies with production improvement, automation, maintenance and process optimisation.",
  },
  {
    icon: Cable,
    title: "Electrical & Industrial Products",
    description:
      "Helping manufacturers improve operational efficiency, quality systems and manufacturing reliability.",
  },
  {
    icon: Building2,
    title: "Greenfield Manufacturing Projects",
    description:
      "Complete support from concept and planning through commissioning, production stabilisation and operational readiness.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-slate-950 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-red-500 font-bold mb-4">
            INDUSTRIES
          </p>

          <h1 className="text-5xl font-extrabold">
            Manufacturing Experience Across
            <br />
            Multiple Industries
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-300 max-w-4xl mx-auto">
            Manufacturing challenges may differ across industries,
            but the fundamentals remain the same—
            identifying root causes, implementing practical solutions
            and delivering sustainable business results.
          </p>

        </div>

      </section>

      {/* Industries */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <div
                  key={index}
                  className="bg-white border rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
                >
                  <Icon className="w-12 h-12 text-red-600 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {industry.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Why A&I */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Manufacturing Companies Choose A&I Consulting
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-xl p-8 shadow">

              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Practical Experience
              </h3>

              <p className="text-gray-600 leading-8">
                More than 25 years of hands-on experience in production,
                maintenance, automation, engineering, electroplating,
                greenfield projects and complete plant operations.
              </p>

            </div>

            <div className="bg-white rounded-xl p-8 shadow">

              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Hands-on Execution
              </h3>

              <p className="text-gray-600 leading-8">
                I don't stop at identifying problems.
                I work alongside your team to implement practical
                improvements that deliver measurable and sustainable results.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-950 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Let's Discuss Your Manufacturing Challenges
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Every manufacturing plant is different.
            Let's identify the opportunities to improve your operations,
            productivity and profitability.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold transition"
          >
            Book Consultation
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}