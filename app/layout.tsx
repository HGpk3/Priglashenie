import type { ReactNode } from "react";
import type { Metadata } from "next";
import { aboreto, ballet, cormorant, greatVibes } from "./fonts";
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
      <body className={`${cormorant.variable} ${greatVibes.variable} ${ballet.variable} ${aboreto.variable}`}>
        {children}
      </body>
    </html>
  );
}
