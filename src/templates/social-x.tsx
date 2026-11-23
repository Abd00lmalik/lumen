import { Canvas, Column, Divider, Heading, Row, Text, token } from "@hyper-elements/react";
import { FeatureIcon } from "../components/art";
import { Lockup } from "../components/lockup";
import { product } from "../data/product";
import { lumen } from "../theme/theme";

/** X / Twitter share card, 1200×630. Headline-led, with the four points beside it. */
export default function SocialX() {
  return (
    <Canvas
      theme={lumen}
      width={1200}
      height={630}
      title={`${product.name} on X`}
      lang="en"
      style={{
        backgroundColor: token("colors.background"),
        padding: [56, 60],
        justifyContent: "center",
      }}
    >
      <Row style={{ gap: 40, alignItems: "center" }}>
        <Column style={{ gap: 18 }}>
          <Lockup mark size={36} />
          <Text style={{ apply: ["eyebrow"] }}>
            {product.eyebrow} · {product.dateLabel}
          </Text>
          <Heading level={1} style={{ fontSize: 68, lineHeight: 0.98, letterSpacing: -1.6 }}>
            {product.xHeadline}
          </Heading>
          <Text style={{ fontSize: 24, lineHeight: 1.35, color: token("colors.muted") }}>{product.socialLine}</Text>
          <Divider style={{ width: 48, borderTop: { width: 2, style: "solid", color: token("colors.gold") } }} />
          <Text style={{ fontSize: 18, fontWeight: 600, color: token("colors.foreground") }}>{product.linkLabels.site}</Text>
        </Column>
        <Column style={{ width: 380, flex: "none", apply: ["card"], padding: 28, gap: 16 }}>
          <Text style={{ apply: ["eyebrow"] }}>In the brief</Text>
          {product.features.map((feature) => (
            <Row key={feature.title} style={{ gap: 12, alignItems: "center" }}>
              <Column style={{ width: 36, flex: "none" }}>
                <FeatureIcon name={feature.icon} />
              </Column>
              <Column style={{ gap: 2 }}>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>{feature.title}</Text>
                <Text style={{ fontSize: 15, color: token("colors.muted") }}>{feature.summary}</Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Row>
    </Canvas>
  );
}
