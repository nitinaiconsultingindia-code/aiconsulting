import Link from "next/link";
import { ArrowRight, Construction } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Construction className="w-16 h-16 text-red-500 mx-auto mb-6" />

          <p className="uppercase tracking-[6px] text-red-500 font-bold">
            REPRESENTATIVE EXPERIENCE
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6">
            Case Studies
            <span className="block text-red-500">Coming Soon</span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-8 max-w-3xl mx-auto">
            We are currently preparing representative manufacturing case
            studies that demonstrate our experience while respecting client
            confidentiality and commercially sensitive information.
          </p>

        </div>

      </section>

      {/* Under Development */}

      <section className="bg-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-8">
            This Page Is Currently Under Development
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Detailed case studies covering greenfield manufacturing,
            production line installations, electroplating, operational
            excellence, productivity improvement, energy-saving initiatives,
            localization projects and equipment reliability will be published
            soon.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 mt-12 text-left shadow">

            <h3 className="text-2xl font-bold mb-4">
              Client Confidentiality
            </h3>

            <p className="text-gray-600 leading-8">
              A&I Consulting is committed to protecting client confidentiality.
              Company names, commercially sensitive information and project
              performance data are not published without permission.
            </p>

          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-12 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Request a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>

      </section>

    </main>
  );
}