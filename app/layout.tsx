import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A&I | Tube, Pipe, Wire & Cable Industry Expert",
  description:
    "A&I provides manufacturing consulting, technical troubleshooting, operational improvement and industrial pipe & tube sourcing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}