import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To-Do App",
  description: "A simple to-do app built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"min-h-screen bg-neutral text-black"}>{children}</body>
    </html>
  );
}
