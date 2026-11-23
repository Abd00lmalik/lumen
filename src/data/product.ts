/**
 * The one sample record every Lumen surface reads.
 * Change this file, then run `npm run render`.
 */
export const product = {
  name: "Meridian",
  company: "Meridian Labs",
  tagline: "The product brief that arrives before the meeting.",
  xHeadline: "The brief before the meeting.",
  description:
    "Meridian reads support, usage, and customer conversations, then writes a weekly brief your whole company can finish before standup.",
  socialLine: "A six-minute brief of what changed for your product this week.",
  eyebrow: "Public launch",
  dateLabel: "November 2026",
  price: "From $18 per teammate, monthly",
  readTime: "About six minutes",
  category: "Product intelligence",
  address: "Meridian Labs, 200 Innovation Way, San Francisco, CA 94107",
  previewText:
    "Meridian is in public release. The weekly product brief now lands before Monday's meeting.",
  links: {
    site: "https://example.com/meridian",
    launch: "https://example.com/meridian/launch",
    docs: "https://example.com/meridian/docs",
    changelog: "https://example.com/meridian/changelog",
    press: "mailto:press@example.com",
  },
  linkLabels: {
    site: "example.com/meridian",
    press: "press@example.com",
  },
  ctas: {
    primary: "Read the launch note",
    secondary: "View the product guide",
  },
  note: {
    title: "A note from the team",
    body: "We built Meridian because Monday kept starting with twelve tabs and no shared picture. The brief is the picture. We hope it gives you the hour back.",
  },
  quote: {
    text: "We stopped opening the dashboard just to remember what the week was about.",
    attribution: "Nia Okonkwo, Head of Product at Northwind",
  },
  features: [
    {
      icon: "brief",
      index: "01",
      title: "One brief",
      summary: "Six minutes, once a week",
      body: "A single page of what changed, in plain language, waiting at the top of Monday.",
    },
    {
      icon: "source",
      index: "02",
      title: "Sources attached",
      summary: "Every claim opens",
      body: "Each line links to the ticket, the call, or the chart it came from. Nothing to take on trust.",
    },
    {
      icon: "themes",
      index: "03",
      title: "Themes, not piles",
      summary: "Signals, folded",
      body: "Similar notes collapse into a few themes, so the brief stays short as the week gets louder.",
    },
    {
      icon: "share",
      index: "04",
      title: "The same story",
      summary: "Inbox, wiki, leadership",
      body: "Product, success, and leadership get one brief. Not three versions of the week.",
    },
  ],
  steps: [
    {
      index: "01",
      title: "Gather",
      body: "Tickets, usage shifts, and call notes collect through the week.",
    },
    {
      index: "02",
      title: "Fold",
      body: "Meridian groups them into themes and keeps the source beside the claim.",
    },
    {
      index: "03",
      title: "Send",
      body: "Monday at 7:00, the same brief is in the inbox and on the wiki.",
    },
  ],
  facts: [
    { label: "Product", value: "Meridian" },
    { label: "Category", value: "Product intelligence" },
    { label: "Release", value: "Public launch, November 2026" },
    { label: "Format", value: "Weekly brief, about six minutes" },
    { label: "Price", value: "From $18 per teammate, monthly" },
    { label: "Press", value: "press@example.com" },
  ],
  boilerplate:
    "Meridian Labs builds Meridian, a writing layer for product teams. It turns the week's support, usage, and customer conversations into one brief the company can read together. Meridian Labs is an independent company based in San Francisco.",
  menu: [
    { text: "Launch", href: "https://example.com/meridian/launch" },
    { text: "Guide", href: "https://example.com/meridian/docs" },
    { text: "Changelog", href: "https://example.com/meridian/changelog" },
  ],
} as const;

export type FeatureIconName = (typeof product.features)[number]["icon"];
