import { Column, Row, Text, token } from "@hyper-elements/react";
import { product } from "../data/product";
import { headingFont } from "../theme/fonts";
import { Mark } from "./art";

/** Wordmark. Pass `mark` on Page, Document, and Canvas. Email stays text-only: Svg is not email-safe. */
export function Lockup({ mark = false, size = 22 }: { mark?: boolean; size?: number }) {
  return (
    <Row style={{ gap: 10, alignItems: "center" }}>
      {mark ? (
        <Column style={{ width: size, flex: "none" }}>
          <Mark size={size} />
        </Column>
      ) : null}
      <Text
        style={{
          fontFamily: headingFont,
          fontSize: size,
          fontWeight: 500,
          letterSpacing: -0.4,
          lineHeight: 1,
          color: token("colors.foreground"),
        }}
      >
        {product.name}
      </Text>
    </Row>
  );
}
