import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Shakshi Enterprises", template: "%s | Shakshi Enterprises" },
  description: "Shakshi Enterprises",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
