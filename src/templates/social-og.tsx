import { Canvas, Column, Heading, Layer, Row, Text, token } from "@hyper-elements/react";
import { WideField } from "../components/art";
import { Lockup } from "../components/lockup";
import { product } from "../data/product";
import { headingFont } from "../theme/fonts";
import { lumen } from "../theme/theme";

/** Open Graph card, 1200×630. Name-led, for link unfurls. */
export default function SocialOpenGraph() {
  return (
    <Canvas theme={lumen} width={1200} height={630} title={`${product.name} Open Graph`} lang="en" style={{ backgroundColor: "#f7faf8" }}>
      <Layer style={{ height: 630, alignItems: "center", justifyItems: "stretch" }}>
        <WideField />
        <Column style={{ padding: [56, 72], gap: 0, justifyContent: "space-between", height: 630 }}>
          <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
            <Column style={{ width: 280, flex: "none" }}>
              <Lockup mark size={32} />
            </Column>
            <Text style={{ apply: ["eyebrow"] }}>
              {product.eyebrow} · {product.dateLabel}
            </Text>
          </Row>
          <Column style={{ gap: 16, width: 820 }}>
            <Heading
              level={1}
              style={{
                fontFamily: headingFont,
                fontSize: 108,
                lineHeight: 0.9,
                letterSpacing: -2.5,
                fontWeight: 500,
              }}
            >
              {product.name}
            </Heading>
            <Text style={{ fontSize: 30, lineHeight: 1.3, color: token("colors.muted"), fontWeight: 400 }}>
              {product.tagline}
            </Text>
          </Column>
          <Row style={{ gap: 12 }}>
            {product.features.slice(0, 3).map((feature) => (
              <Column
                key={feature.title}
                style={{
                  apply: ["card"],
                  padding: [16, 18],
                  gap: 4,
                  borderRadius: 14,
                }}
              >
                <Text style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: token("colors.primary") }}>
                  {feature.index}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>{feature.summary}</Text>
              </Column>
            ))}
          </Row>
        </Column>
      </Layer>
    </Canvas>
  );
}
