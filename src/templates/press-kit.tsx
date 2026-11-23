import {
  Column,
  Document,
  Heading,
  PageFooter,
  PageHeader,
  PageNumber,
  Row,
  Table,
  TableCell,
  TableRow,
  Text,
  token,
} from "@hyper-elements/react";
import { FeatureGrid } from "../components/features";
import { Lockup } from "../components/lockup";
import { product } from "../data/product";
import { fontFaces } from "../theme/fonts";
import { lumen } from "../theme/theme";

/** One-page press kit. Fits a single A4 page: header, facts, features, boilerplate. */
export default function PressKit() {
  return (
    <Document
      theme={lumen}
      size="A4"
      lang="en"
      title={`${product.name} press kit`}
      margin={{ top: 36, right: 44, bottom: 32, left: 44 }}
      fonts={fontFaces}
      style={{ gap: 0 }}
    >
      <PageHeader
        style={{
          padding: [0, 0, 10, 0],
          border: { bottom: { width: 1, style: "solid", color: token("colors.border") } },
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Column style={{ width: 240, flex: "none" }}>
            <Lockup mark size={18} />
          </Column>
          <Text style={{ apply: ["eyebrow"] }}>Press kit</Text>
        </Row>
      </PageHeader>

      <PageFooter
        style={{
          padding: [8, 0, 0, 0],
          border: { top: { width: 1, style: "solid", color: token("colors.border") } },
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 10, color: token("colors.muted") }}>
            {product.company} · {product.address.replace("Meridian Labs, ", "")}
          </Text>
          <Text style={{ fontSize: 10, color: token("colors.muted") }}>
            Page <PageNumber /> of <PageNumber total />
          </Text>
        </Row>
      </PageFooter>

      <Document.Page style={{ gap: 14, backgroundColor: token("colors.background") }}>
        <Column style={{ gap: 6 }}>
          <Text style={{ apply: ["eyebrow"] }}>
            {product.eyebrow} · {product.dateLabel}
          </Text>
          <Heading level={1}>{product.tagline}</Heading>
          <Text style={{ fontSize: 13, lineHeight: 1.5, color: token("colors.muted") }}>{product.description}</Text>
        </Column>

        <Row style={{ gap: 18, alignItems: "start" }}>
          <Column style={{ gap: 8, apply: ["card"], padding: 16 }}>
            <Heading level={2}>The company</Heading>
            <Text style={{ fontSize: 12, lineHeight: 1.5 }}>{product.boilerplate}</Text>
            <Text style={{ fontSize: 12, lineHeight: 1.45, color: token("colors.foreground") }}>{product.note.body}</Text>
          </Column>
          <Column style={{ width: 280, flex: "none", gap: 8 }}>
            <Heading level={2}>Facts</Heading>
            <Table
              style={{
                cellPadding: [6, 0],
                rowBorder: { width: 1, style: "solid", color: token("colors.border") },
                fontSize: 12,
              }}
            >
              {product.facts.map((fact) => (
                <TableRow key={fact.label}>
                  <TableCell style={{ width: 88, color: token("colors.muted"), fontSize: 11 }}>{fact.label}</TableCell>
                  <TableCell style={{ fontWeight: 600, fontSize: 12 }}>{fact.value}</TableCell>
                </TableRow>
              ))}
            </Table>
          </Column>
        </Row>

        <Column style={{ gap: 8 }}>
          <Heading level={2}>The product</Heading>
          <FeatureGrid icons compact />
        </Column>

        <Row style={{ gap: 12 }}>
          <Column style={{ apply: ["wash"], padding: 14, gap: 4 }}>
            <Text style={{ apply: ["eyebrow"] }}>Read it</Text>
            <Text style={{ fontSize: 13, fontWeight: 600 }}>{product.links.launch.replace("https://", "")}</Text>
          </Column>
          <Column style={{ apply: ["wash"], padding: 14, gap: 4 }}>
            <Text style={{ apply: ["eyebrow"] }}>Press contact</Text>
            <Text style={{ fontSize: 13, fontWeight: 600 }}>{product.linkLabels.press}</Text>
          </Column>
          <Column style={{ apply: ["wash"], padding: 14, gap: 4 }}>
            <Text style={{ apply: ["eyebrow"] }}>Availability</Text>
            <Text style={{ fontSize: 13, fontWeight: 600 }}>{product.price}</Text>
          </Column>
        </Row>
      </Document.Page>
    </Document>
  );
}
