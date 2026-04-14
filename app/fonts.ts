import { Aboreto, Ballet, Cormorant_Garamond, Great_Vibes } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script"
});

export const ballet = Ballet({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-decorative"
});

export const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-accent"
});
