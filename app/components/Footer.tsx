import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Factory,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3 mb-5">
              <Factory className="text-red-500 w-8 h-8" />

              <h2 className="text-2xl font-bold text-white">
                A&I Consulting
              </h2>
            </div>

            <p className="leading-8">
              Practical Manufacturing Solutions.
              <br />
              Hands-on Execution.
              <br />
              Sustainable Results.
            </p>

            <p className="mt-6 text-sm text-gray-400 leading-7">
              Helping manufacturing companies improve productivity,
              reduce operating costs, execute greenfield projects,
              implement automation and build world-class manufacturing operations.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Solutions</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/projects">Experience & Results</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

          </div>

          {/* Expertise */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Expertise
            </h3>

            <ul className="space-y-3">
              <li>Operational Excellence</li>
              <li>Greenfield Projects</li>
              <li>Electroplating</li>
              <li>Automation (PLC & Drives)</li>
              <li>Maintenance & Reliability</li>
              <li>Manufacturing Strategy</li>
            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <Mail className="text-red-500 mt-1" size={18} />

                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>info@aiconsulting.in</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-red-500 mt-1" size={18} />

                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-red-500 mt-1" size={18} />

                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Vadodara, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Factory className="text-red-500 mt-1" size={18} />

                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <a
                    href="#"
                    className="hover:text-red-500 transition"
                  >
                    Coming Soon
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-14 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} A&I Consulting. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}