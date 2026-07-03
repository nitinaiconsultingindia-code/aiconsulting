"use client";
import Hero from "./components/Hero";
import Link from "next/link";
import {
  Factory,
  TrendingUp,
  Building2,
  Wrench,
  Target,
  ShieldCheck,
  ArrowRight,
  Cog,
  Gauge,
  CircleDollarSign,
  AlertTriangle,
  Clock3,
  Boxes,
  Settings,
  Hammer,
} from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <Hero />

      {/* Business Results */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-red-600 font-bold">
              RESULTS THAT MATTER
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">

              Helping Manufacturers Achieve Measurable Business Improvement

            </h2>

            <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto leading-8">

              Every manufacturing environment is unique.
              A&I Consulting focuses on delivering sustainable operational
              improvements while maintaining complete client confidentiality.

            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
<div className="bg-gray-50 rounded-xl shadow-md p-8 text-center">

  <h3 className="text-5xl font-extrabold text-red-600">
    25+
  </h3>

  <p className="mt-4 text-gray-700 font-medium leading-7">
    Years of Manufacturing
    <br />
    Leadership
  </p>

</div>

<div className="bg-gray-50 rounded-xl shadow-md p-8 text-center">

  <h3 className="text-5xl font-extrabold text-red-600">
    Multiple
  </h3>

  <p className="mt-4 text-gray-700 font-medium leading-7">
    Greenfield, New High-Speed Lines
<br />
& Improvement Projects
  </p>

</div>

          </div>

        </div>

      </section>

      {/* Manufacturing Challenges */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-red-600 font-bold">

              MANUFACTURING CHALLENGES

            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">

              Challenges We Help Solve

            </h2>

            <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto leading-8">

              Practical consulting focused on solving real manufacturing
              problems—not producing lengthy reports.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Gauge className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-xl font-bold mb-3">

                Low Productivity

              </h3>

              <p className="text-gray-600 leading-7">

                Improve throughput, eliminate bottlenecks
                and maximise production capacity.

              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <CircleDollarSign className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-xl font-bold mb-3">

                High Manufacturing Cost

              </h3>

              <p className="text-gray-600 leading-7">

                Reduce waste, improve resource utilisation
                and optimise manufacturing cost.

              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Settings className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-xl font-bold mb-3">

                Equipment Breakdowns

              </h3>

              <p className="text-gray-600 leading-7">

                Improve equipment reliability through TPM
                and maintenance excellence.

              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <AlertTriangle className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-xl font-bold mb-3">

                Quality Problems

              </h3>

              <p className="text-gray-600 leading-7">

                Strengthen process capability,
                quality systems and defect prevention.

              </p>

            </div>
                        <div className="bg-white rounded-xl shadow-lg p-8">

              <Clock3 className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-xl font-bold mb-3">
                Delivery Delays
              </h3>

              <p className="text-gray-600 leading-7">
                Improve production planning, scheduling
                and on-time customer delivery.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Boxes className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-xl font-bold mb-3">
                Capacity Constraints
              </h3>

              <p className="text-gray-600 leading-7">
                Unlock hidden capacity through process
                optimisation and better resource utilisation.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Building2 className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-xl font-bold mb-3">
                Greenfield Projects
              </h3>

              <p className="text-gray-600 leading-7">
                Complete support from concept,
                planning and execution to production start-up.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Hammer className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-xl font-bold mb-3">
                Plant Expansion
              </h3>

              <p className="text-gray-600 leading-7">
                Expand manufacturing capability with
                minimal disruption to ongoing operations.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Why A&I Consulting */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-red-600 font-bold">
              WHY A&I CONSULTING
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Why Manufacturers Choose A&I Consulting
            </h2>

            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-8">
              Practical manufacturing consulting focused on measurable business
              improvement through hands-on execution—not just recommendations.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Factory className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-2xl font-bold mb-3">
                Practical Manufacturing Leadership
              </h3>

              <p className="text-gray-600 leading-7">
                More than 25 years of practical leadership across production,
                maintenance, engineering, projects and operational improvement.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Target className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-2xl font-bold mb-3">
                Hands-on Execution
              </h3>

              <p className="text-gray-600 leading-7">
                Working alongside your team to implement sustainable
                improvements on the shop floor.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <TrendingUp className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-2xl font-bold mb-3">
                Sustainable Business Improvement
              </h3>

              <p className="text-gray-600 leading-7">
                Focused on improving productivity, quality, reliability
                and long-term profitability.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <ShieldCheck className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-2xl font-bold mb-3">
                Client Confidentiality
              </h3>

              <p className="text-gray-600 leading-7">
                Every engagement is handled with complete professionalism
                and strict confidentiality.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Building2 className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-2xl font-bold mb-3">
                Greenfield Expertise
              </h3>

              <p className="text-gray-600 leading-7">
                Supporting manufacturing companies from planning and design
                through commissioning and production ramp-up.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <Wrench className="text-red-600 w-12 h-12 mb-5"/>

              <h3 className="text-2xl font-bold mb-3">
                Practical Problem Solving
              </h3>

              <p className="text-gray-600 leading-7">
                Solving production, maintenance and process challenges using
                practical, data-driven solutions.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Consulting Process */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-red-600 font-bold">
              OUR APPROACH
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Our Consulting Process
            </h2>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16 text-center">

            {[
              "Factory Assessment",
              "Root Cause Analysis",
              "Improvement Roadmap",
              "Implementation",
              "Performance Review",
              "Sustainable Results",
            ].map((step, index) => (

              <div key={index}>

                <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  {index + 1}
                </div>

                <h3 className="mt-6 font-bold text-lg">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-100 text-slate-900 py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold leading-tight">

            Ready to Transform Your Manufacturing Performance?

          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-9">

            Whether you're planning a greenfield facility,
            improving productivity,
            reducing manufacturing costs,
            or solving persistent shop-floor challenges,
            A&I Consulting is ready to help.

          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-red-600 hover:bg-red-700 transition px-10 py-5 rounded-xl text-xl font-bold"
          >

            Schedule a Consultation

            <ArrowRight size={22}/>

          </Link>

        </div>

      </section>

    </main>
  );
}