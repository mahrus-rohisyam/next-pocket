import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next with Pocketbase",
  description: "Learning Next with Pocketbase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
