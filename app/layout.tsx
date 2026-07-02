import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AL-HAYAT by Dr. Farheen",
  description: "Premium ecommerce storefront for AL-HAYAT by Dr. Farheen.",
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
