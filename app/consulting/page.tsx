import Link from "next/link";
import Header from "../components/Header";

export default function Consulting() {
  return (
    <main className="min-h-screen bg-[#b7e36b] text-slate-900">

      <Header />

      <section>
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

          {/* INTRO */}
          <div className="max-w-4xl">

            <p className="text-xs font-bold tracking-[4px] uppercase mb-5">
              CONSULTING
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Manufacturing Improvement & Technical Support
            </h1>

            <p className="mt-6 text-base md:text-lg leading-7 max-w-3xl text-slate-800">
              Practical technical and operational support for tube, pipe,
              wire and cable manufacturers — focused on improving
              productivity, reliability, quality and profitability.
            </p>

          </div>


          {/* SERVICES */}
          <div className="grid md:grid-cols-2 gap-4 mt-10">

            <Service
              number="01"
              title="EBITDA Improvement & Operational Improvement"
              text="Identify and eliminate manufacturing losses, improve productivity, reduce operating costs and strengthen overall plant performance."
            />

            <Service
              number="02"
              title="Emergency Process Troubleshooting"
              text="Rapid technical support for critical production problems, process instability, quality issues, breakdowns and recurring manufacturing losses."
              dark
            />

            <Service
              number="03"
              title="Process & Machinery Automation / Upgradation"
              text="Support for automation improvement, PLCs, drives, controls, machine upgrades and modernization of existing production equipment."
            />

            <Service
              number="04"
              title="OEE Improvement Support"
              text="Improve availability, performance and quality through structured loss analysis, root-cause identification and shop-floor implementation."
            />

            <Service
              number="05"
              title="Reel-to-Reel Copper Plating Support"
              text="Technical support for copper plating lines, process control, bath chemistry, quality, defects, productivity and operational stability."
            />

            <Service
              number="06"
              title="Multistrand Zinc Plating Support"
              text="Process and technical support for multistrand zinc plating operations, quality improvement, process control and troubleshooting."
            />

            <Service
              number="07"
              title="Extrusion Support for Tube / Cable Industry"
              text="Support for extrusion process improvement, troubleshooting, productivity, quality and equipment-related issues."
            />

            <Service
              number="08"
              title="Electrical & Electronics Repair"
              text="Troubleshooting support for electrical systems, automation panels, PLCs, AC drives, controls and production equipment."
            />

            <Service
              number="09"
              title="Eddy Current Technical Support"
              text="Technical support for eddy current inspection systems, defect detection, process diagnosis and improving inspection reliability."
            />

            <Service
              number="10"
              title="Greenfield Projects & Machinery Commissioning"
              text="Support for new plant setup, machinery selection, installation, commissioning, stabilization and production ramp-up."
              dark
            />

          </div>


          {/* CTA */}
          <div className="mt-8 bg-black text-white rounded-2xl p-7 md:p-8">

            <p className="text-xs font-bold tracking-[3px] text-[#b7e36b]">
              NEED TECHNICAL SUPPORT?
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
              Have a manufacturing problem?
              <br />
              Let's discuss it.
            </h2>

            <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl leading-6">
              Whether it is an urgent production issue, recurring quality
              problem, low OEE or a new project, A&I provides practical
              manufacturing support.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-[#b7e36b] text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white transition"
            >
              CONTACT A&I →
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}


function Service({
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