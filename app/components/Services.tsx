export default function Services() {
  const services = [
    {
      title: "Plant Operations",
      desc: "Improve manufacturing productivity, quality, OEE, cost and delivery through proven operational excellence.",
      icon: "🏭",
    },
    {
      title: "Greenfield Projects",
      desc: "Complete plant setup from concept, planning and procurement to commissioning and production.",
      icon: "🏗️",
    },
    {
      title: "Electroplating",
      desc: "Copper and Zinc electroplating process development, quality improvement and troubleshooting.",
      icon: "⚡",
    },
    {
      title: "Automation",
      desc: "PLC, Drives, Electrical Systems, Maintenance and Industrial Automation improvements.",
      icon: "🤖",
    },
    {
      title: "Cost Reduction",
      desc: "Reduce manufacturing costs through lean practices, process optimization and waste elimination.",
      icon: "💰",
    },
    {
      title: "Leadership Coaching",
      desc: "Mentor plant managers and manufacturing teams to build sustainable operational excellence.",
      icon: "👨‍🏫",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="text-red-600 uppercase tracking-[4px] font-bold">
            Services
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            How I Can Help Your Manufacturing Business
          </h2>

          <p className="text-gray-600 text-xl mt-6 max-w-4xl mx-auto">
            Practical manufacturing consulting backed by 25+ years of
            hands-on leadership experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}