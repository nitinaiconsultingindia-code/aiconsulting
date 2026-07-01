export default function About() {
  const features = [
    {
      title: "Operations Excellence",
      description:
        "Improve productivity, quality and cost through practical manufacturing leadership.",
      icon: "⚙️",
    },
    {
      title: "Greenfield Projects",
      description:
        "Complete project execution from planning and installation to production start-up.",
      icon: "🏗️",
    },
    {
      title: "Electroplating",
      description:
        "Hands-on expertise in Copper & Zinc electroplating process development.",
      icon: "⚡",
    },
    {
      title: "Automation",
      description:
        "PLC, Drives, Electrical Systems and Maintenance Excellence.",
      icon: "🤖",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">

          <p className="text-red-600 uppercase tracking-[6px] font-bold">
            About A&I Consulting
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Manufacturing Expertise That Delivers Results
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-600 leading-8">
            With over 25 years of leadership in manufacturing, I help organizations
            improve productivity, reduce operating costs, execute greenfield projects,
            strengthen maintenance systems and achieve sustainable business growth.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}