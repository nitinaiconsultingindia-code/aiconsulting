"use client";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  Settings,
  Wrench,
  TrendingUp,
  Cpu,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_1gab1da",
      "template_dnbrzji",
      formData,
      "MAuXQ6As5TquaZVH2"
    );

    alert("Consultation request sent successfully.");

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Failed to send consultation request.");
  }
};
  return (
    <main className="bg-gray-50">

      {/* HERO */}

      <section className="bg-slate-950 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[8px] text-red-500 font-bold mb-4">
            CONTACT
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold">
            Let's Improve
            <br />
            Your Manufacturing Performance
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-300 max-w-4xl mx-auto">
            Whether you're planning a greenfield project, improving
            productivity, solving quality issues, reducing breakdowns or
            implementing automation, let's discuss practical manufacturing
            solutions that deliver measurable business results.
          </p>

        </div>

      </section>

      {/* WHAT WE CAN DISCUSS */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">
              What Can We Help You With?
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Practical solutions for manufacturing organisations.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Building2 className="text-red-600 w-10 h-10 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Greenfield Projects
              </h3>
              <p className="text-gray-600 leading-7">
                Manufacturing facility planning, project execution,
                commissioning and production start-up.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <TrendingUp className="text-red-600 w-10 h-10 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Productivity Improvement
              </h3>
              <p className="text-gray-600 leading-7">
                Improve throughput, eliminate bottlenecks,
                reduce manufacturing cost and increase profitability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Factory className="text-red-600 w-10 h-10 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Electroplating
              </h3>
              <p className="text-gray-600 leading-7">
                Copper & zinc electroplating process optimisation,
                quality improvement and capacity enhancement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Wrench className="text-red-600 w-10 h-10 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Maintenance
              </h3>
              <p className="text-gray-600 leading-7">
                Preventive maintenance, reliability improvement and
                breakdown reduction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Cpu className="text-red-600 w-10 h-10 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Automation
              </h3>
              <p className="text-gray-600 leading-7">
                PLC, drives, control panels, process automation
                and manufacturing upgrades.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Settings className="text-red-600 w-10 h-10 mb-5"/>
              <h3 className="text-2xl font-bold mb-3">
                Operational Excellence
              </h3>
              <p className="text-gray-600 leading-7">
                Practical shop-floor improvements to increase
                productivity, quality and EBITDA.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}

            <div className="bg-white rounded-2xl shadow-xl p-10">

              <h2 className="text-4xl font-bold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">

                <div className="flex gap-5">
                  <Mail className="text-red-600 w-8 h-8"/>
                  <div>
                    <h3 className="font-bold text-xl">Email</h3>
                    <a
  href="mailto:nitin.aiconsulting.india@gmail.com"
  className="text-gray-600 hover:text-red-600 transition"
>
  nitin.aiconsulting.india@gmail.com
</a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Phone className="text-red-600 w-8 h-8"/>
                  <div>
                    <h3 className="font-bold text-xl">Phone</h3>
                    <a
  href="tel:+917984804249"
  className="text-gray-600 hover:text-red-600 transition"
>
  +91 xxxxx xxxxx
</a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <MapPin className="text-red-600 w-8 h-8"/>
                  <div>
                    <h3 className="font-bold text-xl">Location</h3>
                    <p className="text-gray-600">
                      Vadodara, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6 mt-8">

                  <h3 className="text-xl font-bold mb-4">
                    Availability
                  </h3>

                  <p className="text-gray-700 leading-8">
                    Available for consulting assignments across
                    India and international manufacturing projects.
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT - FORM */}
                        <div className="bg-white rounded-2xl shadow-xl p-10">

              <h2 className="text-4xl font-bold mb-8">
                Request a Consultation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                  <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
/>

                  <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Company"
  className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
/>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
/>

                  <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Mobile Number"
  className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
/>

                </div>

                <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Subject"
  className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
/>

                <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Tell us about your manufacturing challenge..."
  className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
/>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 transition text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3"
                >
                  Request Consultation
                  <ArrowRight size={20} />
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* WHY WORK WITH A&I CONSULTING */}

      <section className="bg-slate-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl lg:text-5xl font-bold">
              Why Work With A&I Consulting?
            </h2>

            <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto leading-8">
              Unlike traditional consultants who primarily provide reports and
              recommendations, A&I Consulting brings practical manufacturing
              leadership and hands-on execution experience gained from more than
              25 years of working directly on the shop floor.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900 border border-gray-700 rounded-xl p-8">

              <h3 className="text-2xl font-bold text-red-500 mb-4">
                Practical Experience
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>✔ 25+ Years Manufacturing Leadership</li>
                <li>✔ Plant Head Experience</li>
                <li>✔ Shop-floor Problem Solving</li>
                <li>✔ Hands-on Project Execution</li>
              </ul>

            </div>

            <div className="bg-slate-900 border border-gray-700 rounded-xl p-8">

              <h3 className="text-2xl font-bold text-red-500 mb-4">
                Technical Expertise
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>✔ Greenfield Projects</li>
                <li>✔ Electroplating</li>
                <li>✔ Automation (PLC & Drives) and Energy saving</li>
                <li>✔ Maintenance & Reliability</li>
              </ul>

            </div>

            <div className="bg-slate-900 border border-gray-700 rounded-xl p-8">

              <h3 className="text-2xl font-bold text-red-500 mb-4">
                Business Results
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>✔ Productivity Improvement</li>
                <li>✔ Reduced Manufacturing Cost</li>
                <li>✔ Improved Equipment Reliability</li>
                <li>✔ Sustainable EBITDA Growth</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="bg-red-600 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Improve Your Manufacturing Performance?
          </h2>

          <p className="mt-8 text-xl leading-9 text-red-100">

            Whether you need support with greenfield projects,
            productivity improvement, electroplating, automation,
            maintenance or operational excellence,
            A&I Consulting is ready to work alongside your team
            to deliver practical solutions and sustainable business results.

          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 mt-10 bg-white text-red-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg transition"
          >
            Back to Home
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </main>
  );
}