import {
  Button,
  Column,
  Divider,
  Heading,
  Link,
  Menu,
  Page,
  Row,
  Section,
  Text,
  token,
} from "@hyper-elements/react";
import { BriefArt } from "../components/art";
import { FeatureGrid } from "../components/features";
import { Lockup } from "../components/lockup";
import { product } from "../data/product";
import { headingFont } from "../theme/fonts";
import { fontFaces } from "../theme/fonts";
import { lumen } from "../theme/theme";

/** Announcement page. Same product record, same theme, responsive web HTML. */
export default function AnnouncementPage() {
  return (
    <Page
      theme={lumen}
      width={1000}
      lang="en"
      title={`${product.name} — ${product.tagline}`}
      description={product.description}
      fonts={fontFaces}
      style={{ gap: 0 }}
    >
      <Section style={{ backgroundColor: token("colors.background"), padding: [28, 28, 12, 28] }}>
        <Row style={{ alignItems: "center" }}>
          <Column style={{ width: 220, flex: "none" }}>
            <Lockup mark size={26} />
          </Column>
          <Column>
            <Menu
              items={[...product.menu]}
              separator=""
              style={{
                color: token("colors.foreground"),
                fontSize: 15,
                fontWeight: 500,
                justifyContent: "end",
                padding: [6, 12],
              }}
            />
          </Column>
        </Row>
      </Section>

      <Section style={{ backgroundColor: token("colors.background"), padding: [36, 28, 28, 28] }}>
        <Row style={{ gap: 48, alignItems: "center" }}>
          <Column style={{ gap: 18 }}>
            <Text style={{ apply: ["eyebrow"] }}>
              {product.eyebrow} · {product.dateLabel}
            </Text>
            <Heading level={1} style={{ fontSize: 56, lineHeight: 1.05, letterSpacing: -1.2, mobile: { fontSize: 36 } }}>
              {product.tagline}
            </Heading>
            <Text style={{ apply: ["muted"], fontSize: 18, lineHeight: 1.55 }}>{product.description}</Text>
            <Row style={{ gap: 16, alignItems: "center" }}>
              <Button href={product.links.launch}>{product.ctas.primary}</Button>
              <Link href={product.links.docs}>{product.ctas.secondary}</Link>
            </Row>
          </Column>
          <Column
            style={{
              width: 360,
              flex: "none",
              apply: ["card"],
              padding: 28,
              gap: 8,
              alignItems: "center",
            }}
          >
            <BriefArt />
            <Text style={{ apply: ["fine"], textAlign: "center" }}>This week's brief · {product.readTime.toLowerCase()}</Text>
          </Column>
        </Row>
      </Section>

      <Section style={{ backgroundColor: token("colors.surface"), padding: [72, 28, 64, 28] }}>
        <Column style={{ gap: 28 }}>
          <Column style={{ gap: 8 }}>
            <Text style={{ apply: ["eyebrow"] }}>What ships today</Text>
            <Heading level={2}>Everything a Monday meeting was missing.</Heading>
          </Column>
          <FeatureGrid icons tone="wash" />
        </Column>
      </Section>

      <Section style={{ backgroundColor: token("colors.background"), padding: [72, 28] }}>
        <Column style={{ gap: 28 }}>
          <Column style={{ gap: 8 }}>
            <Text style={{ apply: ["eyebrow"] }}>A week with {product.name}</Text>
            <Heading level={2}>Gather, fold, send.</Heading>
          </Column>
          <Row style={{ gap: 18 }}>
            {product.steps.map((step) => (
              <Column key={step.title} style={{ apply: ["card"], gap: 10, padding: 24 }}>
                <Text
                  style={{
                    fontFamily: headingFont,
                    fontSize: 22,
                    fontWeight: 500,
                    color: token("colors.gold"),
                    lineHeight: 1,
                  }}
                >
                  {step.index}
                </Text>
                <Heading level={3}>{step.title}</Heading>
                <Text style={{ apply: ["fine"], fontSize: 15 }}>{step.body}</Text>
              </Column>
            ))}
          </Row>
        </Column>
      </Section>

      <Section style={{ backgroundColor: token("colors.background"), padding: [8, 28, 72, 28] }}>
        <Column style={{ apply: ["wash"], padding: [48, 48, 40, 48], gap: 16, alignItems: "start" }}>
          <Divider style={{ width: 40, borderTop: { width: 2, style: "solid", color: token("colors.gold") } }} />
          <Heading level={2} style={{ fontSize: 32, lineHeight: 1.25 }}>
            “{product.quote.text}”
          </Heading>
          <Text style={{ apply: ["fine"] }}>{product.quote.attribution}</Text>
        </Column>
      </Section>

      <Section
        style={{
          backgroundColor: token("colors.wash"),
          padding: [72, 28],
          gap: 16,
          alignItems: "center",
        }}
      >
        <Text style={{ apply: ["eyebrow"], textAlign: "center" }}>Start this Monday</Text>
        <Heading
          level={2}
          style={{ fontSize: 40, textAlign: "center", mobile: { fontSize: 30 } }}
        >
          Read the week before you enter the room.
        </Heading>
        <Text style={{ apply: ["muted"], textAlign: "center" }}>{product.price}. No dashboard to babysit.</Text>
        <Button href={product.links.launch} style={{ alignSelf: "center" }}>
          {product.ctas.primary}
        </Button>
      </Section>

      <Section style={{ backgroundColor: token("colors.background"), padding: [36, 28, 48, 28] }}>
        <Column style={{ gap: 18 }}>
          <Row style={{ alignItems: "center" }}>
            <Column style={{ width: 240, flex: "none" }}>
              <Lockup mark size={20} />
            </Column>
            <Column>
              <Menu
                items={[...product.menu, { text: "Press", href: product.links.press }]}
                separator="·"
                style={{
                  color: token("colors.muted"),
                  fontSize: 14,
                  justifyContent: "end",
                  padding: [4, 8],
                  separatorColor: token("colors.border"),
                }}
              />
            </Column>
          </Row>
          <Divider />
          <Text style={{ apply: ["fine"] }}>{product.address}</Text>
          <Text style={{ fontSize: 12, color: token("colors.faint") }}>
            {product.name} is a fictional product. The copy in this kit is sample data.
          </Text>
        </Column>
      </Section>
    </Page>
  );
}
