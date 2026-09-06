import Link from "next/link";

export default function Contact() {
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
            className="contact-nav"
            style={{
              display: "flex",
              gap: "28px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            <Link href="/" className="nav-link">
              HOME
            </Link>

            <Link href="/consulting" className="nav-link">
              CONSULTING
            </Link>

            <Link href="/trading" className="nav-link">
              PIPE & TUBE TRADING
            </Link>

            <Link href="/contact" className="nav-link">
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
          padding: "28px",
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
            A&I
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 4vw, 54px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-1.8px",
              margin: "9px 0 0 0",
            }}
          >
            Let's Discuss Your Requirement
          </h1>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.45,
              maxWidth: "760px",
              margin: "12px 0 0 0",
              color: "#334155",
            }}
          >
            Whether you need technical support, operational improvement,
            machinery assistance, or pipe & tube sourcing, tell us what you
            need.
          </p>

        </div>


        {/* TWO BUSINESS AREAS */}
        <div
          style={{
            marginTop: "24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "9px",
            flexShrink: 0,
          }}
        >

          {/* CONSULTING */}
          <div
            style={{
              background: "#000000",
              color: "#ffffff",
              borderRadius: "15px",
              padding: "20px 22px",
            }}
          >

            <p
              style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#b7e36b",
                margin: 0,
              }}
            >
              CONSULTING
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.4,
                margin: "9px 0 0 0",
              }}
            >
              Technical problem • Mill issue • Automation • Process
              improvement • New machinery
            </p>

          </div>


          {/* TRADING */}
          <div
            style={{
              background: "rgba(255,255,255,0.78)",
              color: "#071a3d",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "15px",
              padding: "20px 22px",
            }}
          >

            <p
              style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#58708f",
                margin: 0,
              }}
            >
              PIPE & TUBE TRADING
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.4,
                margin: "9px 0 0 0",
              }}
            >
              Product requirement • Specification • Grade • Size • Quantity
            </p>

          </div>

        </div>


        {/* CONTACT INFORMATION */}
        <div
          style={{
            marginTop: "9px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "9px",
            flexShrink: 0,
          }}
        >

          {/* MOBILE / WHATSAPP */}
          <div
            style={{
              background: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "15px",
              padding: "18px 22px",
            }}
          >

            <p
              style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#58708f",
                margin: 0,
              }}
            >
              MOBILE / WHATSAPP
            </p>

            <p
              style={{
                fontSize: "18px",
                fontWeight: 700,
                margin: "8px 0 0 0",
              }}
            >
              +91 97271 56382
            </p>

            <a
              href="https://wa.me/919727156382"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "8px",
                fontSize: "10px",
                fontWeight: 700,
                color: "#071a3d",
                textDecoration: "underline",
              }}
            >
              CHAT ON WHATSAPP →
            </a>

          </div>


          {/* EMAIL 1 */}
          <div
            style={{
              background: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "15px",
              padding: "18px 22px",
            }}
          >

            <p
              style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#58708f",
                margin: 0,
              }}
            >
              CONSULTING EMAIL
            </p>

            <a
              href="mailto:nitin.aiconsulting.india@gmail.com"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                color: "#071a3d",
                textDecoration: "none",
                marginTop: "10px",
                wordBreak: "break-word",
              }}
            >
              nitin.aiconsulting.india@gmail.com
            </a>

          </div>


          {/* EMAIL 2 */}
          <div
            style={{
              background: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "15px",
              padding: "18px 22px",
            }}
          >

            <p
              style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#58708f",
                margin: 0,
              }}
            >
              TRADING EMAIL
            </p>

            <a
              href="mailto:aiflextubing@gmail.com"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                color: "#071a3d",
                textDecoration: "none",
                marginTop: "10px",
                wordBreak: "break-word",
              }}
            >
              aiflextubing@gmail.com
            </a>

          </div>

        </div>


        {/* FINAL CTA */}
        <div
          style={{
            marginTop: "10px",
            background: "#000000",
            color: "#ffffff",
            borderRadius: "15px",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flex: 1,
            minHeight: "120px",
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
              DIRECT CONTACT
            </p>

            <h2
              style={{
                fontSize: "24px",
                lineHeight: 1.1,
                fontWeight: 700,
                margin: "6px 0 0 0",
              }}
            >
              Technical Expertise. Practical Solutions.
            </h2>

            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.65)",
                margin: "6px 0 0 0",
              }}
            >
              Tube • Pipe • Wire • Cable Manufacturing
            </p>

          </div>


          <div
            style={{
              display: "flex",
              gap: "8px",
              flexShrink: 0,
            }}
          >

            <a
              href="mailto:nitin.aiconsulting.india@gmail.com"
              style={{
                background: "#b7e36b",
                color: "#000000",
                padding: "12px 18px",
                borderRadius: "999px",
                fontSize: "10px",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              EMAIL US →
            </a>

            <a
              href="https://wa.me/919727156382"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ffffff",
                color: "#000000",
                padding: "12px 18px",
                borderRadius: "999px",
                fontSize: "10px",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              WHATSAPP →
            </a>

          </div>

        </div>

      </div>


      {/* MOBILE RESPONSIVE */}
      <style>{`
        .nav-link {
          color: #071a3d;
          text-decoration: none;
        }

        .nav-link:hover {
          opacity: 0.55;
        }

        @media (max-width: 767px) {

          main {
            overflow: auto !important;
          }

          .contact-nav {
            display: none !important;
          }

        }

        @media (max-width: 900px) {

          main > div {
            height: auto !important;
            min-height: calc(100vh - 58px);
          }

          main > div > div:nth-child(2),
          main > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }

          main > div > div:last-child {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

        }
      `}</style>

    </main>
  );
}