import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yessha — AI/ML Engineer",
  description:
    "Personal portfolio of Yessha, an AI/ML Engineer building intelligent systems and full-stack AI applications that solve real-world problems.",
  keywords: ["AI", "ML", "Machine Learning", "Full Stack", "Engineer", "Portfolio"],
  authors: [{ name: "Yessha" }],
  openGraph: {
    title: "Yessha — AI/ML Engineer",
    description: "Building intelligent systems and full-stack AI applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
