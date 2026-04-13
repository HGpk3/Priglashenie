export const designTokens = {
  colors: {
    background: "#210208",
    blush: "#DBB7B7",
    white: "#FFFFFF",
    black: "#000000",
    emerald: "#0F5235",
    graphite: "#3A3432",
    lavender: "#B8A7B6",
    steelBlue: "#A7B2C3",
    olive: "#6A6B2E",
    dustyRose: "#C38C93",
    powder: "#E7B8B2",
    burgundy: "#6A1F2B",
    navy: "#1F2E5F",
    chocolate: "#5A3A2A"
  },
  sectionIds: {
    hero: "hero",
    invitation: "invitation",
    timeline: "timeline",
    dressCode: "dress-code",
    galleries: "outfit-galleries",
    rsvp: "rsvp",
    details: "details",
    countdown: "countdown"
  },
  fontFallbacks: {
    // Replace with brand script font from Figma when it becomes available in the repo.
    script: '"Snell Roundhand", "Apple Chancery", "URW Chancery L", cursive',
    // Replace with exact serif font from Figma when exported or licensed.
    serif: '"Cormorant Garamond", "Baskerville", "Times New Roman", serif',
    sans: '"Helvetica Neue", "Avenir Next", "Segoe UI", Arial, sans-serif'
  }
} as const;
