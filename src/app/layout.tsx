import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Shakshi Enterprises", template: "%s | Shakshi Enterprises" },
  description:
    "Industrial and commercial storage solutions designed around your business operations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
