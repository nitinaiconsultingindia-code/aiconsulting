import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import FloatingContact from "./components/FloatingContact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "A&I | Tube, Pipe, Wire & Cable Industry Expert",
    template: "%s | A&I",
  },

  description:
    "A&I provides technical consulting, operational improvement, emergency technical support, and industrial pipe & tube sourcing for continuous manufacturing industries.",

  keywords: [
    "Tube Manufacturing Consultant",
    "Pipe Manufacturing Consultant",
    "Wire Manufacturing Consultant",
    "Cable Manufacturing Consultant",
    "Tube Mill Consultant",
    "Pipe Mill Consultant",
    "Emergency Technical Support",
    "Tube Machinery",
    "Pipe Machinery",
    "Eddy Current Testing",
    "Zinc Plating",
    "Copper Plating",
    "Industrial Pipe Trading",
    "Industrial Tube Trading",
  ],

  authors: [
    {
      name: "A&I",
    },
  ],

  creator: "A&I",

  metadataBase: new URL("https://aimanufacturingconsultant.com"),

  openGraph: {
    title: "A&I | Tube, Pipe, Wire & Cable Industry Expert",
    description:
      "Technical expertise, operational improvement and reliable industrial sourcing for continuous manufacturing industries.",
    url: "https://aimanufacturingconsultant.com",
    siteName: "A&I",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "LLFcSq7jUU-99zpQ1Fiom7KOGhbv4NVHWIZwDGnLqZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />

        {children}
        <FloatingContact />
      </body>
    </html>
  );
}