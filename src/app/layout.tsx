

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gabriel Lara Hormazábal | Portfolio",
    template: "%s | Gabriel Lara",
  },
  description:
    "Portfolio profesional de Gabriel Lara Hormazábal. Data Scientist, Machine Learning Engineer, Data Analyst y Full Stack Developer.",
  keywords: [
    "Gabriel Lara",
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Analyst",
    "Full Stack Developer",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
  ],
  authors: [{ name: "Gabriel Lara Hormazábal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

