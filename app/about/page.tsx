import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Wrench,
  Building2,
  TrendingUp,
  Users,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-slate-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="flex justify-center">

              <Image
  src="/consultant-ai.jpg"
  alt="Manufacturing Consultant"
                width={420}
                height={520}
                className="rounded-2xl border-2 border-red-600 shadow-2xl"
                priority
              />

            </div>

            <div>

              <p className="uppercase tracking-[6px] text-red-500 font-bold mb-5">
                ABOUT A&I CONSULTING
              </p>

              <h1 className="text-5xl font-extrabold leading-tight">

                More Than
                <br />
                25 Years
                <br />
                On The Shop Floor

              </h1>

              <p className="mt-8 text-xl leading-9 text-gray-300">

                I have spent more than two decades solving manufacturing
                problems where they actually occur—on the shop floor.

                My approach is different from traditional consulting.

                I don't just recommend improvements.

                I work alongside your management, engineers,
                supervisors and operators to identify root causes,
                implement practical solutions and deliver measurable
                business results.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Philosophy */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-slate-900">

            Practical Manufacturing Solutions.
            <br />
            Hands-on Execution.
            <br />
            Sustainable Results.

          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-9">

            Whether the challenge is productivity, quality,
            maintenance, automation, electroplating,
            greenfield execution or operational excellence,
            my focus is always implementation—not just advice.

          </p>

        </div>

      </section>

      {/* Expertise */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Hands-on Manufacturing Leadership
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl p-8 shadow">
              <Factory className="text-red-600 w-12 h-12 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Plant Operations
              </h3>
              <p className="text-gray-600 leading-8">
                Complete responsibility for production,
                quality, delivery and profitability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <Building2 className="text-red-600 w-12 h-12 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Greenfield Projects
              </h3>
              <p className="text-gray-600 leading-8">
                Manufacturing facilities from concept
                to successful production.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <Wrench className="text-red-600 w-12 h-12 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Maintenance & Automation
              </h3>
              <p className="text-gray-600 leading-8">
                Reliability, PLC, Drives,
                utilities and maintenance excellence.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <TrendingUp className="text-red-600 w-12 h-12 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Productivity Improvement
              </h3>
              <p className="text-gray-600 leading-8">
                Eliminate bottlenecks,
                reduce waste and improve profitability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <Users className="text-red-600 w-12 h-12 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Team Development
              </h3>
              <p className="text-gray-600 leading-8">
                Building high-performance
                manufacturing teams.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <BadgeCheck className="text-red-600 w-12 h-12 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Sustainable Results
              </h3>
              <p className="text-gray-600 leading-8">
                Improvements that continue
                long after the project ends.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-950 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">

            Let's Solve Your Manufacturing Challenges

          </h2>

          <p className="mt-6 text-xl text-gray-300">

            If your manufacturing plant is facing productivity,
            quality, maintenance or operational challenges,
            let's work together to implement practical solutions.

          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold transition"
          >
            Book Consultation
            <ArrowRight size={18}/>
          </Link>

        </div>

      </section>

    </main>
  );
}