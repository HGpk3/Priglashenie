import type { ReactNode } from "react";
import type { Metadata } from "next";
import { adineKirnberg, cormorant, cormorantDisplayAccent, goodVibesPro } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Свадебное приглашение",
  description: "Электронное приглашение на свадьбу в формате атмосферного лендинга."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${cormorant.variable} ${goodVibesPro.variable} ${adineKirnberg.variable} ${cormorantDisplayAccent.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
