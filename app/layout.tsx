import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import GoogleAnalytics from "./components/GoogleAnalytics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "A&I Consulting | Manufacturing Consulting & Operational Excellence",
    template: "%s | A&I Consulting",
  },

  description:
    "A&I Consulting helps manufacturing companies improve productivity, reduce costs, execute greenfield projects, implement automation and achieve sustainable operational excellence through practical shop-floor leadership.",

  keywords: [
    "Manufacturing Consultant",
    "Operational Excellence",
    "Plant Head",
    "Greenfield Project",
    "Electroplating",
    "Manufacturing Productivity",
    "Automation",
    "PLC",
    "Industrial Engineering",
    "Lean Manufacturing",
    "Factory Consulting",
    "Manufacturing Strategy",
  ],

  authors: [
    {
      name: "Nitin Kanodiya",
    },
  ],

  creator: "A&I Consulting",

  metadataBase: new URL("https://aimanufacturingconsultant.com"),

  openGraph: {
    title: "A&I Consulting",
    description:
      "Practical Manufacturing Solutions. Hands-on Execution. Sustainable Results.",
    url: "https://aimanufacturingconsultant.com",
    siteName: "A&I Consulting",
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
      <body className="bg-white">
        <GoogleAnalytics />

        <Navbar />

        {children}

        <Footer />

        {/* <FloatingButtons /> */}
      </body>
    </html>
  );
}