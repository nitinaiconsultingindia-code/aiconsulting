import Link from "next/link";
import {
  Factory,
  Building2,
  Wrench,
  TrendingUp,
  Target,
  ArrowRight,
  Award,
} from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}

      <section className="bg-slate-950 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[8px] text-red-500 font-bold mb-5">
            PROFESSIONAL EXPERIENCE
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Leadership Experience &
            <br />
            Manufacturing Achievements
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-9">
            These achievements are based on my leadership roles in
            manufacturing organisations and demonstrate the practical
            experience, technical expertise and shop-floor execution that
            I now bring to every consulting assignment.
          </p>

        </div>

      </section>

      {/* CAREER IMPACT */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">
              Career Impact at a Glance
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              More than two decades of practical manufacturing leadership.
            </p>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">

              <TrendingUp className="mx-auto text-red-600 w-10 h-10 mb-4"/>

              <h3 className="text-4xl font-bold text-red-700">
                25+
              </h3>

              <p className="mt-3 text-gray-600">
                Years Experience
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">

              <Building2 className="mx-auto text-red-600 w-10 h-10 mb-4"/>

              <h3 className="text-4xl font-bold text-red-700">
                ₹100Cr+
              </h3>

              <p className="mt-3 text-gray-600">
                Greenfield Project
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">

              <Factory className="mx-auto text-red-600 w-10 h-10 mb-4"/>

              <h3 className="text-4xl font-bold text-red-700">
                9000
              </h3>

              <p className="mt-3 text-gray-600">
                Sq.M Facility
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">

              <Award className="mx-auto text-red-600 w-10 h-10 mb-4"/>

              <h3 className="text-4xl font-bold text-red-700">
                17.5%
              </h3>

              <p className="mt-3 text-gray-600">
                Highest EBITDA
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">

              <Target className="mx-auto text-red-600 w-10 h-10 mb-4"/>

              <h3 className="text-4xl font-bold text-red-700">
                50%
              </h3>

              <p className="mt-3 text-gray-600">
                Productivity Gain
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">

              <Wrench className="mx-auto text-red-600 w-10 h-10 mb-4"/>

              <h3 className="text-2xl font-bold text-red-700">
                Hands-on
              </h3>

              <p className="mt-3 text-gray-600">
                Shop Floor Leadership
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-red-600">

            <h2 className="text-3xl font-bold mb-6">
              Practical Manufacturing Solutions. Hands-on Execution. Sustainable Results.
            </h2>

            <p className="text-gray-700 leading-9 text-lg">

              Throughout my career I have personally led greenfield
              manufacturing projects, solved critical shop-floor problems,
              upgraded production lines, implemented automation,
              improved productivity, increased plant profitability,
              and built high-performing manufacturing teams.

            </p>

            <p className="text-gray-700 leading-9 text-lg mt-6">

              My consulting approach is simple:
              understand the real problem on the shop floor,
              work alongside your team,
              implement practical solutions,
              and deliver measurable business results.

            </p>

          </div>

        </div>

      </section>
            {/* ============================= */}
      {/* ACHIEVEMENT 1 */}
      {/* ============================= */}

      <section className="pb-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="bg-slate-900 text-white p-8">

              <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                GREENFIELD PROJECT
              </span>

              <h2 className="text-4xl font-bold">
                Greenfield Manufacturing Facility Development
              </h2>

              <p className="text-gray-300 mt-3 text-lg">
                ₹100+ Crore Investment • 9,000 sq.m Manufacturing Facility
              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-10 p-10">

              {/* Challenge */}

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  Business Challenge
                </h3>

                <p className="text-gray-700 leading-8">

                  Develop a completely new manufacturing facility including
                  civil construction, utilities, production infrastructure,
                  installation of high-speed manufacturing lines and production
                  readiness.

                </p>

              </div>

              {/* Role */}

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  My Contribution
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li>✔ Led complete greenfield project execution</li>
                  <li>✔ Constructed 9,000 sq.m manufacturing building</li>
                  <li>✔ Planned production layout & material flow</li>
                  <li>✔ Utility planning & infrastructure</li>
                  <li>✔ Installed high-speed manufacturing lines</li>
                  <li>✔ Commissioning & production stabilisation</li>
                  <li>✔ SOP development & team training</li>

                </ul>

              </div>

              {/* Results */}

              <div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">

                  <h3 className="text-2xl font-bold text-green-700 mb-5">
                    Business Results
                  </h3>

                  <ul className="space-y-3 font-semibold text-green-800">

                    <li>✓ Modern manufacturing facility commissioned</li>
                    <li>✓ Increased production capacity</li>
                    <li>✓ Successful production start-up</li>
                    <li>✓ Improved manufacturing capability</li>
                    <li>✓ Foundation for long-term business growth</li>
                    <li>✓ Strong contribution towards future EBITDA growth</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================= */}
      {/* ACHIEVEMENT 2 */}
      {/* ============================= */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="bg-slate-900 text-white p-8">

              <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                ELECTROPLATING
              </span>

              <h2 className="text-4xl font-bold">
                Copper & Zinc Electroplating Process Transformation
              </h2>

              <p className="text-gray-300 mt-3 text-lg">
                Capacity Expansion • Productivity Improvement • Quality Excellence
              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-10 p-10">

              {/* Challenge */}

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  Business Challenge
                </h3>

                <p className="text-gray-700 leading-8">

                  Improve production capacity, process stability and product
                  quality while eliminating recurring surface defects,
                  peel-off failures and production bottlenecks in copper
                  and zinc electroplating operations.

                </p>

              </div>

              {/* Contribution */}

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  My Contribution
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li>✔ Complete shop-floor process study</li>
                  <li>✔ Eliminated production bottlenecks</li>
                  <li>✔ Added additional cleaning tanks</li>
                  <li>✔ Added new plating solution tanks</li>
                  <li>✔ Upgraded complete plating line</li>
                  <li>✔ Optimised process parameters</li>
                  <li>✔ Eliminated surface defects</li>
                  <li>✔ Eliminated peel-off quality issues</li>
                  <li>✔ Improved process stability</li>
                  <li>✔ Worked directly with production & maintenance teams</li>

                </ul>

              </div>

              {/* Results */}

              <div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">

                  <h3 className="text-2xl font-bold text-green-700 mb-5">
                    Business Results
                  </h3>

                  <ul className="space-y-3 font-semibold text-green-800">

                    <li>✓ Increased production capacity</li>
                    <li>✓ Higher productivity</li>
                    <li>✓ Improved process stability</li>
                    <li>✓ Eliminated surface quality defects</li>
                    <li>✓ Eliminated peel-off failures</li>
                    <li>✓ Better product quality</li>
                    <li>✓ Reduced manufacturing losses</li>
                    <li>✓ Major contribution to achieving 17.5% EBITDA</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ============================= */}
      {/* ACHIEVEMENT 3 */}
      {/* ============================= */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="bg-slate-900 text-white p-8">

              <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                PRODUCTIVITY IMPROVEMENT
              </span>

              <h2 className="text-4xl font-bold">
                Tube Manufacturing Productivity Improvement
              </h2>

              <p className="text-gray-300 mt-3 text-lg">
                Shop-floor Troubleshooting • Tooling Optimisation • Process Improvement
              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-10 p-10">

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  Business Challenge
                </h3>

                <p className="text-gray-700 leading-8">
                  Frequent machine stoppages, tooling failures and process
                  instability were limiting production output, increasing
                  manufacturing cost and affecting delivery performance.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  My Contribution
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li>✔ Hands-on shop-floor troubleshooting</li>
                  <li>✔ Root cause analysis of recurring failures</li>
                  <li>✔ Machine process optimisation</li>
                  <li>✔ Tooling improvements</li>
                  <li>✔ Production bottleneck elimination</li>
                  <li>✔ Continuous improvement implementation</li>
                  <li>✔ Operator coaching & process monitoring</li>

                </ul>

              </div>

              <div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">

                  <h3 className="text-2xl font-bold text-green-700 mb-5">
                    Business Results
                  </h3>

                  <ul className="space-y-3 font-semibold text-green-800">

                    <li>✓ Higher production output</li>
                    <li>✓ Improved machine utilisation</li>
                    <li>✓ Reduced tooling failures</li>
                    <li>✓ Improved OEE</li>
                    <li>✓ Lower manufacturing cost</li>
                    <li>✓ Improved delivery performance</li>
                    <li>✓ Higher plant profitability</li>
                    <li>✓ Positive contribution to EBITDA improvement</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================= */}
      {/* ACHIEVEMENT 4 */}
      {/* ============================= */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="bg-slate-900 text-white p-8">

              <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                NEW MANUFACTURING LINE
              </span>

              <h2 className="text-4xl font-bold">
                PP Jacketing Line Installation & Commissioning
              </h2>

              <p className="text-gray-300 mt-3 text-lg">
                Extrusion Technology • Commissioning • Production Start-up
              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-10 p-10">

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  Business Challenge
                </h3>

                <p className="text-gray-700 leading-8">
                  Establish a new PP jacketing (extrusion) manufacturing line
                  to expand production capability and support business growth.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  My Contribution
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li>✔ Project planning & execution</li>
                  <li>✔ Equipment installation</li>
                  <li>✔ Utility planning</li>
                  <li>✔ Line commissioning</li>
                  <li>✔ Process validation</li>
                  <li>✔ SOP preparation</li>
                  <li>✔ Operator training</li>
                  <li>✔ Production stabilisation</li>

                </ul>

              </div>

              <div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">

                  <h3 className="text-2xl font-bold text-green-700 mb-5">
                    Business Results
                  </h3>

                  <ul className="space-y-3 font-semibold text-green-800">

                    <li>✓ Successful line commissioning</li>
                    <li>✓ Expanded manufacturing capability</li>
                    <li>✓ Increased production capacity</li>
                    <li>✓ Reliable production start-up</li>
                    <li>✓ New product capability</li>
                    <li>✓ Supported business expansion</li>
                    <li>✓ Improved revenue potential</li>
                    <li>✓ Contributed to EBITDA growth</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================= */}
      {/* ACHIEVEMENT 5 */}
      {/* ============================= */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="bg-slate-900 text-white p-8">

              <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                MAINTENANCE & AUTOMATION
              </span>

              <h2 className="text-4xl font-bold">
                ERW Line Reliability Improvement
              </h2>

              <p className="text-gray-300 mt-3 text-lg">
                Preventive Maintenance • PLC • Drives • Modernisation
              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-10 p-10">

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  Business Challenge
                </h3>

                <p className="text-gray-700 leading-8">
                  Frequent ERW line breakdowns were affecting production,
                  increasing maintenance cost and reducing equipment reliability.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-red-600 mb-5">
                  My Contribution
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li>✔ Preventive Maintenance implementation</li>
                  <li>✔ PLC modernisation</li>
                  <li>✔ AC Drive upgrades</li>
                  <li>✔ Automation improvements</li>
                  <li>✔ Latest technology integration</li>
                  <li>✔ Root cause analysis</li>
                  <li>✔ Reliability improvement programme</li>
                  <li>✔ Maintenance team development</li>

                </ul>

              </div>

              <div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">

                  <h3 className="text-2xl font-bold text-green-700 mb-5">
                    Business Results
                  </h3>

                  <ul className="space-y-3 font-semibold text-green-800">

                    <li>✓ Significant reduction in breakdowns</li>
                    <li>✓ Higher machine availability</li>
                    <li>✓ Improved production reliability</li>
                    <li>✓ Lower maintenance costs</li>
                    <li>✓ Increased productivity</li>
                    <li>✓ Improved Overall Equipment Effectiveness</li>
                    <li>✓ Better operational performance</li>
                    <li>✓ Positive contribution to EBITDA improvement</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* WHY THIS EXPERIENCE MATTERS */}

      <section className="py-20 bg-slate-950 text-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[6px] text-red-500 font-bold mb-4">
              WHY A&I CONSULTING
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold">
              Why This Experience Matters
              <br />
              To Your Business
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-slate-900 border border-gray-700 rounded-2xl p-8">

              <h3 className="text-2xl font-bold text-red-500 mb-5">
                Practical Shop-floor Leadership
              </h3>

              <p className="text-gray-300 leading-8">

                Every improvement highlighted on this page was achieved
                through hands-on involvement on the shop floor—not from
                presentations or reports. I believe sustainable results
                come from understanding real manufacturing problems,
                working alongside production teams and implementing
                practical solutions that deliver measurable business value.

              </p>

            </div>

            <div className="bg-slate-900 border border-gray-700 rounded-2xl p-8">

              <h3 className="text-2xl font-bold text-red-500 mb-5">
                From Experience to Consulting
              </h3>

              <p className="text-gray-300 leading-8">

                Today, A&I Consulting brings this practical manufacturing
                experience to organisations seeking improvements in
                productivity, quality, maintenance, automation,
                greenfield projects and operational excellence.
                The objective is simple—solve problems, improve
                profitability and build sustainable manufacturing systems.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONFIDENTIALITY */}

      <section className="bg-gray-100 py-14">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-4">
              Confidentiality Notice
            </h3>

            <p className="text-gray-700 leading-8">

              The achievements presented on this page are based on my
              leadership roles within manufacturing organisations.
              Company-specific confidential information has intentionally
              been omitted while highlighting the practical experience,
              technical expertise and measurable business outcomes that
              now form the foundation of A&I Consulting.

            </p>

          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}

      <section className="bg-red-600 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl lg:text-5xl font-bold">

            Let's Solve Your
            <br />
            Manufacturing Challenges

          </h2>

          <p className="mt-8 text-xl leading-9 text-red-100">

            Whether you're planning a greenfield project,
            improving productivity, reducing breakdowns,
            optimising electroplating operations,
            implementing automation or enhancing overall
            manufacturing performance, A&I Consulting can
            help you achieve measurable and sustainable results.

          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-12 bg-white text-red-600 hover:bg-gray-100 transition px-10 py-5 rounded-xl text-lg font-bold"
          >
            Book a Consultation
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </main>
  );
}