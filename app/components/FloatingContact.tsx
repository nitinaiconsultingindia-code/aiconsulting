"use client";

export default function FloatingContact() {
  const requestCallback = () => {
    const phone = window.prompt(
      "Please enter your phone number so we can call you back:"
    );

    if (!phone) return;

    const message = `Hello A&I, I would like a call back. My contact number is ${phone}.`;

    const whatsappUrl = `https://wa.me/919727156382?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "72px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "7px",
      }}
    >
      {/* CALL ME BACK */}
      <button
        onClick={requestCallback}
        style={{
          background: "#000000",
          color: "#b7e36b",
          border: "none",
          borderRadius: "999px",
          padding: "9px 15px",
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "0.5px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          boxShadow: "0 3px 12px rgba(0,0,0,0.18)",
        }}
      >
        📞 CALL ME BACK
      </button>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919727156382"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#25D366",
          color: "#ffffff",
          borderRadius: "999px",
          padding: "9px 15px",
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "0.5px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          boxShadow: "0 3px 12px rgba(0,0,0,0.18)",
        }}
      >
        💬 WHATSAPP
      </a>

      {/* EMAIL */}
      <a
        href="mailto:nitin.aiconsulting.india@gmail.com"
        style={{
          background: "#ffffff",
          color: "#071a3d",
          borderRadius: "999px",
          padding: "9px 15px",
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "0.5px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
        }}
      >
        ✉ EMAIL
      </a>
    </div>
  );
}