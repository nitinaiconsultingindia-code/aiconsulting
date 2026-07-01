import Hero from "./components/Hero";
import Link from "next/link";
import {
  Factory,
  TrendingUp,
  Building2,
  Wrench,
  Cpu,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <Hero />

      {/* Statistics */}

      <section className="bg-white py-10 border-t border-gray-200">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-extrabold text-red-700">
                25+
              </h2>
              <p className="mt-2 text-gray-700">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-extrabold text-red-700">
                ₹100Cr+
              </h2>
              <p className="mt-2 text-gray-700">
                Greenfield Projects
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-extrabold text-red-700">
                50%
              </h2>
              <p className="mt-2 text-gray-700">
                Productivity Gain
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-extrabold text-red-700">
                17.5%
              </h2>
              <p className="mt-2 text-gray-700">
                Highest EBITDA
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why A&I Consulting */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-red-600 font-bold">
              WHY A&I CONSULTING
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Practical Manufacturing Leadership
            </h2>

            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-8">
              Manufacturing consulting built on practical shop-floor
              leadership, hands-on execution and measurable business
              results—not just recommendations.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Factory className="text-red-600 w-12 h-12 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Manufacturing Leadership
              </h3>

              <p className="text-gray-600 leading-7">
                More than 25 years of practical manufacturing
                leadership including Plant Head responsibility.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Building2 className="text-red-600 w-12 h-12 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Greenfield Projects
              </h3>

              <p className="text-gray-600 leading-7">
                Successfully executed greenfield manufacturing
                projects from planning through commissioning.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <TrendingUp className="text-red-600 w-12 h-12 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Productivity Improvement
              </h3>

              <p className="text-gray-600 leading-7">
                Delivered measurable improvements in productivity,
                quality, profitability and operational performance.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Cpu className="text-red-600 w-12 h-12 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Automation Expertise
              </h3>

              <p className="text-gray-600 leading-7">
                Extensive experience with PLCs, drives,
                process automation and production line upgrades.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Wrench className="text-red-600 w-12 h-12 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Shop-floor Problem Solving
              </h3>

              <p className="text-gray-600 leading-7">
                Practical troubleshooting of production,
                maintenance and tooling challenges to deliver
                sustainable improvements.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Target className="text-red-600 w-12 h-12 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Sustainable Results
              </h3>

              <p className="text-gray-600 leading-7">
                Focused on improving productivity, reducing costs,
                increasing reliability and supporting long-term
                EBITDA growth.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#0f172a] text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Improve Your Manufacturing Performance?
          </h2>

          <p className="mt-6 text-xl text-gray-300 leading-8">
            Partner with A&I Consulting to improve productivity,
            reduce costs, execute greenfield projects and build
            world-class manufacturing operations.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-lg text-xl font-bold transition"
          >
            Request a Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}