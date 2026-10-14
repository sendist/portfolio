import type { Metadata } from "next";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

export const metadata: Metadata = {
  title: "Sendi Setiawan | Software Engineer",
  description: "Portfolio of Sendi Setiawan, Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-[#111111] text-[#F5F5F5] font-sans relative">
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
