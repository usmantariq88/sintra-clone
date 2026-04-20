import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sintra – AI Employees: Your First Digital Workers Team That Never Sleep",
  description: "Hire 24/7 AI digital workers for your website, content, customer support, and business sales operations without adding extra headcount.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
