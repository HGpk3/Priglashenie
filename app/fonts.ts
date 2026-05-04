import localFont from "next/font/local";

export const cormorant = localFont({
  src: [
    {
      path: "../fonts/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/CormorantGaramond-Italic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "../fonts/CormorantGaramond-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/CormorantGaramond-MediumItalic.ttf",
      weight: "500",
      style: "italic"
    },
    {
      path: "../fonts/CormorantGaramond-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../fonts/CormorantGaramond-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic"
    },
    {
      path: "../fonts/CormorantGaramond-BoldItalic.ttf",
      weight: "700",
      style: "italic"
    }
  ],
  variable: "--font-serif"
});

export const greatVibes = localFont({
  src: "../fonts/ofont.ru_Good Vibes Pro.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-script"
});

export const ballet = localFont({
  src: "../fonts/adinekirnberg.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-decorative"
});

export const aboreto = localFont({
  src: "../fonts/CormorantGaramond-SemiBold.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-display-accent"
});
