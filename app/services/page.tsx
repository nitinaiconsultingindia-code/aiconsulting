import Link from "next/link";
import {
  Factory,
  Wrench,
  Building2,
  Zap,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Factory,
    title: "Production & Productivity Improvement",
    description:
      "Improve plant productivity by identifying bottlenecks, balancing production lines, reducing cycle time, improving OEE and increasing manufacturing output.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Reliability",
    description:
      "Reduce equipment breakdowns through preventive maintenance, predictive maintenance, TPM, root cause analysis and reliability improvement.",
  },
  {
    icon: Building2,
    title: "Greenfield Project Execution",
    description:
      "Complete support from project planning, plant layout, equipment selection and installation to commissioning and production stabilization.",
  },
  {
    icon: Zap,
    title: "Automation & Process Improvement",
    description:
      "PLC, drives, industrial automation, process optimisation and machine improvements to enhance productivity and quality.",
  },
  {
    icon: ShieldCheck,
    title: "Electroplating Process Excellence",
    description:
      "Copper and zinc electroplating process development, troubleshooting, defect reduction, quality improvement and process stabilization.",
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    description:
      "Reduce manufacturing costs, eliminate waste, improve quality, increase profitability and build sustainable manufacturing systems.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-slate-950 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-red-500 font-bold mb-4">
            SOLUTIONS
          </p>

          <h1 className="text-5xl font-extrabold leading-tight">
            Solving Manufacturing Problems
          </h1>

          <h2 className="mt-5 text-3xl text-gray-300 font-semibold">
            On the Shop Floor...
            <br />
            Not Just in the Boardroom.
          </h2>

          <p className="mt-8 text-xl leading-9 max-w-4xl mx-auto text-gray-300">
            Every manufacturing plant faces unique challenges.
            My role is not simply to identify problems,
            but to work with your team to implement practical,
            sustainable solutions that improve performance.
          </p>

        </div>

      </section>

      {/* Solutions */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {solutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border p-8 hover:shadow-2xl transition"
                >
                  <Icon className="text-red-600 w-12 h-12 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Working Approach */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            How I Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Diagnose
              </h3>

              <p className="text-gray-600 leading-8">
                Understand the problem through detailed shop-floor observation,
                discussions with your team and data analysis.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Implement
              </h3>

              <p className="text-gray-600 leading-8">
                Work alongside your engineers, supervisors and operators to
                implement practical solutions that solve the root cause.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Sustain
              </h3>

              <p className="text-gray-600 leading-8">
                Train your teams, establish systems and ensure improvements are
                maintained long after implementation.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-950 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Improve Your Manufacturing Performance?
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Let's discuss your manufacturing challenges and develop practical
            solutions that deliver measurable business results.
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