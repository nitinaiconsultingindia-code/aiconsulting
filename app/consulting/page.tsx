import Link from "next/link";

export default function Consulting() {
  const services = [
    "EBITDA Improvement & Operational Improvement",
    "Emergency Process Troubleshooting",
    "Process & Machinery Automation / Upgradation",
    "OEE Improvement Support",
    "Reel-to-Reel Copper Plating Support",
    "Multistrand Zinc Plating Support",
    "Extrusion Support for Tube / Cable Industry",
    "Electrical & Electronics Repair",
    "Eddy Current Technical Support",
    "Greenfield Projects & Machinery Commissioning",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#b7e36b",
        color: "#071a3d",
      }}
    >

      {/* HEADER */}
      <header
        style={{
          height: "58px",
          borderBottom: "1px solid rgba(0,0,0,0.10)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >

          <Link
            href="/"
            style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "#071a3d",
              textDecoration: "none",
            }}
          >
            A&I
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "28px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
            className="consulting-nav"
          >
            <Link href="/" style={{ color: "#071a3d", textDecoration: "none" }}>
              HOME
            </Link>

            <Link
              href="/consulting"
              style={{ color: "#071a3d", textDecoration: "none" }}
            >
              CONSULTING
            </Link>

            <Link
              href="/trading"
              style={{ color: "#071a3d", textDecoration: "none" }}
            >
              PIPE & TUBE TRADING
            </Link>

            <Link
              href="/contact"
              style={{ color: "#071a3d", textDecoration: "none" }}
            >
              CONTACT
            </Link>
          </nav>

        </div>
      </header>


      {/* CONTENT */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          height: "calc(100vh - 58px)",
          margin: "0 auto",
          padding: "24px 28px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* INTRO */}
        <div style={{ flexShrink: 0 }}>

          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "4px",
              margin: 0,
            }}
          >
            A&I CONSULTING
          </p>

          <h1
            style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-1.5px",
              margin: "9px 0 0 0",
            }}
          >
            EBITDA Improvement & Emergency Technical Support
          </h1>

          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.4,
              maxWidth: "800px",
              margin: "10px 0 0 0",
              color: "#334155",
            }}
          >
            We help continuous tube, pipe, wire and cable manufacturers improve
            profitability, productivity and operational performance, with rapid
            technical support when critical problems arise.
          </p>

        </div>


        {/* SERVICES */}
        <div
          style={{
            marginTop: "22px",
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >

          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "4px",
              margin: "0 0 10px 0",
              flexShrink: 0,
            }}
          >
            OUR SERVICES
          </p>


          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "7px",
              flex: 1,
              minHeight: 0,
            }}
          >

            {services.map((service, index) => (

              <div
                key={service}
                style={{
                  background:
                    index === 0
                      ? "#000000"
                      : "rgba(255,255,255,0.78)",

                  color:
                    index === 0
                      ? "#ffffff"
                      : "#071a3d",

                  border:
                    index === 0
                      ? "none"
                      : "1px solid rgba(0,0,0,0.07)",

                  borderRadius: "14px",

                  padding: "8px 18px",

                  display: "flex",
                  alignItems: "center",

                  gap: "13px",

                  minWidth: 0,

                  boxSizing: "border-box",
                }}
              >

                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color:
                      index === 0
                        ? "#b7e36b"
                        : "#58708f",
                    flexShrink: 0,
                    width: "22px",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>


                <span
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.15,
                    fontWeight: 600,
                    letterSpacing: "-0.2px",
                    minWidth: 0,
                  }}
                >
                  {service}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* CTA */}
        <div
          style={{
            marginTop: "18px",
            background: "#000000",
            color: "#ffffff",
            borderRadius: "15px",
            padding: "15px 22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexShrink: 0,
          }}
        >

          <div>

            <p
              style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#b7e36b",
                margin: 0,
              }}
            >
              NEED TECHNICAL SUPPORT?
            </p>

            <h2
              style={{
                fontSize: "20px",
                lineHeight: 1.1,
                fontWeight: 700,
                margin: "4px 0 0 0",
              }}
            >
              Discuss Your Requirement
            </h2>

          </div>


          <Link
            href="/contact"
            style={{
              background: "#b7e36b",
              color: "#000000",
              padding: "11px 20px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            DISCUSS YOUR REQUIREMENT →
          </Link>

        </div>

      </div>


      {/* MOBILE */}
      <style>{`
        @media (max-width: 767px) {

          main {
            overflow: auto !important;
          }

          .consulting-nav {
            display: none !important;
          }

        }
      `}</style>

    </main>
  );
}