import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

  metadataBase: new URL("https://www.aiconsulting.in"),

  openGraph: {
    title: "A&I Consulting",
    description:
      "Practical Manufacturing Solutions. Hands-on Execution. Sustainable Results.",
    url: "https://www.aiconsulting.in",
    siteName: "A&I Consulting",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}