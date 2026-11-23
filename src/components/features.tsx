import { Column, Grid, Heading, Text, token } from "@hyper-elements/react";
import { product } from "../data/product";
import { headingFont } from "../theme/fonts";
import { FeatureIcon } from "./art";

/**
 * The four product points, shared by the email, the page, and the press kit.
 * Email uses numerals. Page and document use the Svg icons.
 */
export function FeatureGrid({
  icons = false,
  columns = 2,
  compact = false,
  tone = "card",
}: {
  icons?: boolean;
  columns?: 2 | 4;
  compact?: boolean;
  tone?: "card" | "wash";
}) {
  return (
    <Grid columns={columns} style={{ gap: compact ? 12 : 16 }}>
      {product.features.map((feature) => (
        <Column
          key={feature.title}
          style={{
            apply: [tone],
            gap: compact ? 6 : 10,
            padding: compact ? 16 : 24,
          }}
        >
          {icons ? (
            <Column style={{ width: 36 }}>
              <FeatureIcon name={feature.icon} />
            </Column>
          ) : (
            <Text
              style={{
                fontFamily: headingFont,
                fontSize: compact ? 16 : 22,
                fontWeight: 500,
                color: token("colors.primary"),
                lineHeight: 1,
              }}
            >
              {feature.index}
            </Text>
          )}
          <Heading level={3} style={compact ? { fontSize: 15 } : undefined}>
            {feature.title}
          </Heading>
          <Text style={{ apply: ["fine"], fontSize: compact ? 12 : 14 }}>{feature.body}</Text>
        </Column>
      ))}
    </Grid>
  );
}
