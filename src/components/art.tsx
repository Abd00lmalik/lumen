import { Circle, Line, Path, Rect, Svg } from "@hyper-elements/react";
import type { FeatureIconName } from "../data/product";

const ink = "#14211c";
const green = "#0e6b52";
const wash = "#e7f3ee";
const gold = "#a67c3d";
const line = "#dce5e0";

/** Small geometric mark: a horizon, a point of light, a meridian arc. Not for email. */
export function Mark({ size = 36 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" title="Meridian">
      <Rect x={0} y={0} width={48} height={48} rx={14} style={{ fill: wash }} />
      <Circle cx={24} cy={24} r={13} style={{ fill: "transparent", stroke: green, strokeWidth: 1.6 }} />
      <Line x1={24} y1={7} x2={24} y2={16} style={{ stroke: green, strokeWidth: 1.6 }} />
      <Circle cx={24} cy={24} r={2.4} style={{ fill: gold }} />
      <Path d="M13 31c3.2 4.2 7 6.2 11 6.2s7.8-2 11-6.2" style={{ fill: "transparent", stroke: green, strokeWidth: 1.6 }} />
    </Svg>
  );
}

/** One of four small icons. Shapes are direct children so Svg stays valid. */
export function FeatureIcon({ name }: { name: FeatureIconName }) {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" title={name}>
      <Rect x={0} y={0} width={36} height={36} rx={10} style={{ fill: wash }} />
      {name === "brief" ? (
        <Rect x={10} y={10} width={16} height={16} rx={2} style={{ fill: "transparent", stroke: green, strokeWidth: 1.5 }} />
      ) : null}
      {name === "brief" ? <Line x1={13} y1={15} x2={23} y2={15} style={{ stroke: green, strokeWidth: 1.4 }} /> : null}
      {name === "brief" ? <Line x1={13} y1={19} x2={20} y2={19} style={{ stroke: gold, strokeWidth: 1.4 }} /> : null}
      {name === "brief" ? <Line x1={13} y1={23} x2={21} y2={23} style={{ stroke: green, strokeWidth: 1.4 }} /> : null}
      {name === "source" ? (
        <Circle cx={14} cy={18} r={4} style={{ fill: "transparent", stroke: green, strokeWidth: 1.5 }} />
      ) : null}
      {name === "source" ? <Circle cx={23} cy={14} r={3} style={{ fill: gold }} /> : null}
      {name === "source" ? <Line x1={17.2} y1={16.2} x2={20.6} y2={14.8} style={{ stroke: green, strokeWidth: 1.4 }} /> : null}
      {name === "themes" ? <Rect x={10} y={11} width={16} height={3} rx={1.5} style={{ fill: green }} /> : null}
      {name === "themes" ? <Rect x={10} y={16.5} width={12} height={3} rx={1.5} style={{ fill: green, opacity: 0.7 }} /> : null}
      {name === "themes" ? <Rect x={10} y={22} width={8} height={3} rx={1.5} style={{ fill: gold }} /> : null}
      {name === "share" ? <Circle cx={12} cy={18} r={2.3} style={{ fill: green }} /> : null}
      {name === "share" ? <Circle cx={24} cy={12} r={2.3} style={{ fill: green }} /> : null}
      {name === "share" ? <Circle cx={24} cy={24} r={2.3} style={{ fill: gold }} /> : null}
      {name === "share" ? <Line x1={14} y1={17} x2={22} y2={13} style={{ stroke: green, strokeWidth: 1.3 }} /> : null}
      {name === "share" ? <Line x1={14} y1={19} x2={22} y2={23} style={{ stroke: green, strokeWidth: 1.3 }} /> : null}
    </Svg>
  );
}

/** A quiet drawing of a weekly brief. Used on the announcement page. */
export function BriefArt() {
  return (
    <Svg width={300} height={332} viewBox="0 0 300 332" title="This week's brief">
      <Circle cx={248} cy={36} r={28} style={{ fill: "#f8f1e3" }} />
      <Rect x={8} y={20} width={250} height={292} rx={22} style={{ fill: "#ffffff" }} />
      <Rect x={28} y={40} width={78} height={20} rx={10} style={{ fill: wash }} />
      <Circle cx={42} cy={50} r={3.5} style={{ fill: green }} />
      <Rect x={50} y={47} width={42} height={6} rx={3} style={{ fill: green, opacity: 0.85 }} />
      <Rect x={28} y={78} width={168} height={12} rx={6} style={{ fill: ink }} />
      <Rect x={28} y={98} width={128} height={12} rx={6} style={{ fill: ink, opacity: 0.72 }} />
      <Rect x={28} y={128} width={210} height={7} rx={3.5} style={{ fill: line }} />
      <Rect x={28} y={143} width={188} height={7} rx={3.5} style={{ fill: line }} />
      <Rect x={28} y={158} width={198} height={7} rx={3.5} style={{ fill: line }} />
      <Rect x={28} y={186} width={210} height={32} rx={10} style={{ fill: "#f3f6f4" }} />
      <Rect x={40} y={198} width={6} height={8} rx={2} style={{ fill: green }} />
      <Rect x={54} y={199} width={96} height={6} rx={3} style={{ fill: "#5c6b66" }} />
      <Rect x={28} y={226} width={210} height={32} rx={10} style={{ fill: "#f3f6f4" }} />
      <Rect x={40} y={238} width={6} height={8} rx={2} style={{ fill: gold }} />
      <Rect x={54} y={239} width={120} height={6} rx={3} style={{ fill: "#5c6b66" }} />
      <Rect x={28} y={276} width={40} height={4} rx={2} style={{ fill: gold }} />
    </Svg>
  );
}

/** Soft circles behind a square poster. The first child of a Layer. */
export function PosterField({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} title="Poster field">
      <Circle cx={size * 0.5} cy={size * 0.42} r={size * 0.28} style={{ fill: wash }} />
      <Circle cx={size * 0.82} cy={size * 0.16} r={size * 0.09} style={{ fill: "#f8f1e3" }} />
      <Circle cx={size * 0.14} cy={size * 0.8} r={size * 0.06} style={{ fill: wash }} />
    </Svg>
  );
}

/** Wide field for the Open Graph card. */
export function WideField() {
  return (
    <Svg width={1200} height={630} viewBox="0 0 1200 630" title="Open graph field">
      <Circle cx={980} cy={120} r={160} style={{ fill: wash }} />
      <Circle cx={1040} cy={520} r={90} style={{ fill: "#f8f1e3" }} />
      <Circle cx={90} cy={540} r={46} style={{ fill: wash }} />
    </Svg>
  );
}
