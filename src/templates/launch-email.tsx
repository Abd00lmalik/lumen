import {
  Button,
  Column,
  Divider,
  Email,
  Heading,
  Link,
  Menu,
  Row,
  Section,
  Text,
  token,
} from "@hyper-elements/react";
import { product } from "../data/product";
import { FeatureGrid } from "../components/features";
import { Lockup } from "../components/lockup";
import { fontFaces } from "../theme/fonts";
import { lumen } from "../theme/theme";

/** Launch announcement. Email-client safe: no Svg, no data URIs, px layout. */
export default function LaunchEmail() {
  return (
    <Email
      theme={lumen}
      width={600}
      lang="en"
      title={`${product.name} is live`}
      previewText={product.previewText}
      fonts={fontFaces}
      style={{ gap: 0 }}
    >
      <Section style={{ backgroundColor: token("colors.background"), padding: [32, 24, 8, 24] }}>
        <Row style={{ alignItems: "center" }}>
          <Column style={{ width: 200, flex: "none" }}>
            <Lockup size={22} />
          </Column>
          <Text style={{ apply: ["eyebrow"], textAlign: "right" }}>{product.eyebrow}</Text>
        </Row>
      </Section>

      <Section style={{ backgroundColor: token("colors.background"), padding: [12, 24, 8, 24] }}>
        <Column style={{ apply: ["card"], padding: [36, 36, 32, 36], gap: 16 }}>
          <Divider style={{ width: 36, borderTop: { width: 2, style: "solid", color: token("colors.gold") } }} />
          <Text style={{ apply: ["eyebrow"] }}>Now available</Text>
          <Heading level={1}>{product.tagline}</Heading>
          <Text style={{ apply: ["muted"] }}>{product.description}</Text>
          <Button href={product.links.launch}>{product.ctas.primary}</Button>
          <Text style={{ fontSize: 14, lineHeight: 1.5 }}>
            Or open the <Link href={product.links.docs}>product guide</Link>.
          </Text>
        </Column>
      </Section>

      <Section style={{ backgroundColor: token("colors.background"), padding: [28, 24, 8, 24] }}>
        <Column style={{ gap: 8, padding: [0, 8, 4, 8] }}>
          <Text style={{ apply: ["eyebrow"] }}>What ships today</Text>
          <Heading level={2}>Four things, one brief.</Heading>
        </Column>
      </Section>

      <Section style={{ backgroundColor: token("colors.background"), padding: [8, 24, 8, 24] }}>
        <FeatureGrid />
      </Section>

      <Section style={{ backgroundColor: token("colors.background"), padding: [20, 24, 8, 24] }}>
        <Column style={{ apply: ["wash"], padding: [28, 28, 24, 28], gap: 10 }}>
          <Text style={{ apply: ["eyebrow"] }}>{product.note.title}</Text>
          <Text style={{ fontSize: 16, lineHeight: 1.55 }}>{product.note.body}</Text>
        </Column>
      </Section>

      <Section style={{ backgroundColor: token("colors.background"), padding: [28, 24, 36, 24] }}>
        <Column style={{ gap: 12, alignItems: "center" }}>
          <Text style={{ apply: ["fine"], textAlign: "center" }}>{product.address}</Text>
          <Menu
            items={[...product.menu, { text: "Press", href: product.links.press }]}
            separator="·"
            style={{
              color: token("colors.muted"),
              fontSize: 13,
              justifyContent: "center",
              padding: [2, 8],
              separatorColor: token("colors.border"),
            }}
          />
          <Text style={{ fontSize: 12, lineHeight: 1.5, textAlign: "center" }}>
            You are receiving this because you asked to hear when {product.name} launched.{" "}
            <Link href={product.links.site}>Visit {product.name}</Link>
          </Text>
        </Column>
      </Section>
    </Email>
  );
}
