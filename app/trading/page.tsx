import Link from "next/link";

export default function Trading() {
  const products = [
    "Carbon Steel",
    "Stainless Steel",
    "Alloy Steel",
    "ERW",
    "Seamless",
    "Precision Tubes",
    "Boiler & Heat Exchanger Tubes",
    "Special / Custom Requirements",
    "Bundy DW Tubes",
    "Bundy SW Tubes",
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
            className="trading-nav"
          >
            <Link
              href="/"
              style={{
                color: "#071a3d",
                textDecoration: "none",
              }}
            >
              HOME
            </Link>

            <Link
              href="/consulting"
              style={{
                color: "#071a3d",
                textDecoration: "none",
              }}
            >
              CONSULTING
            </Link>

            <Link
              href="/trading"
              style={{
                color: "#071a3d",
                textDecoration: "none",
              }}
            >
              PIPE & TUBE TRADING
            </Link>

            <Link
              href="/contact"
              style={{
                color: "#071a3d",
                textDecoration: "none",
              }}
            >
              CONTACT
            </Link>
          </nav>

        </div>
      </header>


      {/* MAIN CONTENT */}
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
            A&I TRADING
          </p>

          <h1
            style={{
              fontSize: "clamp(30px, 3.5vw, 48px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-1.5px",
              margin: "9px 0 0 0",
            }}
          >
            Industrial Pipe & Tube Sourcing
          </h1>

          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.45,
              maxWidth: "800px",
              margin: "10px 0 0 0",
              color: "#334155",
            }}
          >
            We source and supply pipes and tubes according to your required
            specification, grade, size, standard and application.
          </p>

        </div>


        {/* PRODUCTS */}
        <div
          style={{
            marginTop: "24px",
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
            PRODUCTS
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

            {products.map((product, index) => (

              <div
                key={product}
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

                    width: "22px",
                    flexShrink: 0,
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
                  {product}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* REQUIREMENT + CTA */}
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
              SEND US YOUR REQUIREMENT
            </p>

            <h2
              style={{
                fontSize: "19px",
                lineHeight: 1.15,
                fontWeight: 700,
                margin: "4px 0 0 0",
              }}
            >
              Size • Thickness • Grade • Standard • Quantity • Application
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
            REQUEST A QUOTE →
          </Link>

        </div>

      </div>


      {/* MOBILE */}
      <style>{`
        @media (max-width: 767px) {

          main {
            overflow: auto !important;
          }

          .trading-nav {
            display: none !important;
          }

        }
      `}</style>

    </main>
  );
}