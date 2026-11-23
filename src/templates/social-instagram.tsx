import { Canvas, Column, Divider, Heading, Layer, Span, Text, token } from "@hyper-elements/react";
import { Mark, PosterField } from "../components/art";
import { product } from "../data/product";
import { lumen } from "../theme/theme";

/** Instagram square, 1080×1080. A centered poster. */
export default function SocialInstagram() {
  return (
    <Canvas
      theme={lumen}
      width={1080}
      height={1080}
      title={`${product.name} on Instagram`}
      lang="en"
      style={{ backgroundColor: token("colors.background") }}
    >
      <Layer style={{ height: 1080, alignItems: "center", justifyItems: "center" }}>
        <PosterField size={1080} />
        <Column style={{ width: 760, gap: 22, alignItems: "center" }}>
          <Mark size={84} />
          <Text style={{ apply: ["eyebrow"], textAlign: "center" }}>{product.eyebrow}</Text>
          <Heading level={1} style={{ fontSize: 92, lineHeight: 0.92, letterSpacing: -2, textAlign: "center" }}>
            {product.name}
          </Heading>
          <Text style={{ fontSize: 30, lineHeight: 1.35, textAlign: "center", color: token("colors.muted") }}>
            {product.tagline}
          </Text>
          <Divider style={{ width: 48, borderTop: { width: 2, style: "solid", color: token("colors.gold") } }} />
          <Column style={{ gap: 12, alignItems: "center" }}>
            {product.features.map((feature) => (
              <Text key={feature.title} style={{ fontSize: 22, textAlign: "center", fontWeight: 500 }}>
                {feature.title}
                <Span style={{ color: token("colors.muted"), fontWeight: 400 }}> · {feature.summary}</Span>
              </Text>
            ))}
          </Column>
          <Text style={{ apply: ["eyebrow"], textAlign: "center" }}>{product.dateLabel}</Text>
        </Column>
      </Layer>
    </Canvas>
  );
}
