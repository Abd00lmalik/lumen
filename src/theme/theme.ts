import { defineTheme } from "@hyper-elements/react";
import { bodyFont, headingFont } from "./fonts";

/**
 * One light theme for the email, the page, the press kit, and the social cards.
 * Inside a theme, tokens are written as "{colors.primary}".
 */
export const lumen = defineTheme({
  colors: {
    background: "#f3f6f4",
    foreground: "#14211c",
    primary: "#0e6b52",
    primaryForeground: "#f7fffb",
    muted: "#5c6b66",
    faint: "#8a9691",
    border: "#dce5e0",
    surface: "#ffffff",
    wash: "#e7f3ee",
    gold: "#a67c3d",
    goldSoft: "#f8f1e3",
  },
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  fontSizes: {
    body: 16,
  },
  lineHeights: {
    body: 1.55,
  },
  elements: {
    Heading: {
      fontWeight: 500,
      color: "{colors.foreground}",
      by: {
        level: {
          1: { fontSize: 48, lineHeight: 1.08, letterSpacing: -1, mobile: { fontSize: 34 } },
          2: { fontSize: 28, lineHeight: 1.18, letterSpacing: -0.4, mobile: { fontSize: 24 } },
          3: { fontSize: 18, lineHeight: 1.3, letterSpacing: -0.2 },
        },
      },
    },
    Button: {
      backgroundColor: "{colors.primary}",
      color: "{colors.primaryForeground}",
      borderRadius: 999,
      padding: [13, 22],
      fontWeight: 600,
      fontSize: 15,
      alignSelf: "start",
      hover: { backgroundColor: "#0b5844" },
    },
    Link: {
      color: "{colors.primary}",
      textDecoration: "underline",
    },
    Divider: {
      borderTop: { width: 1, style: "solid", color: "{colors.border}" },
    },
  },
  styles: {
    card: {
      backgroundColor: "{colors.surface}",
      padding: 28,
      gap: 12,
      borderRadius: 20,
    },
    wash: {
      backgroundColor: "{colors.wash}",
      padding: 22,
      gap: 8,
      borderRadius: 16,
    },
    eyebrow: {
      fontFamily: bodyFont,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 1.6,
      textTransform: "uppercase",
      color: "{colors.primary}",
    },
    muted: {
      color: "{colors.muted}",
      fontSize: 16,
      lineHeight: 1.55,
    },
    fine: {
      fontSize: 13,
      lineHeight: 1.5,
      color: "{colors.muted}",
    },
  },
  formats: {
    email: {
      elements: {
        Heading: {
          by: {
            level: {
              1: { fontSize: 34, lineHeight: 1.12, letterSpacing: -0.6, mobile: { fontSize: 28 } },
              2: { fontSize: 24, lineHeight: 1.2, letterSpacing: -0.3, mobile: { fontSize: 22 } },
            },
          },
        },
      },
    },
    document: {
      elements: {
        Heading: {
          by: {
            level: {
              1: { fontSize: 30, lineHeight: 1.12, letterSpacing: -0.5 },
              2: { fontSize: 18, lineHeight: 1.25, letterSpacing: -0.2 },
              3: { fontSize: 15, lineHeight: 1.3, letterSpacing: -0.1 },
            },
          },
        },
      },
    },
  },
});
