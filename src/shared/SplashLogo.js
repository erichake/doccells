import { createElement as h } from "react";

const RECT_COLORS = ["#60a5fa", "#64748b", "#64748b", "#64748b"];
const TEXT_STYLE = {
  fill: "#94a3b8",
  fontFamily: "Arial, Helvetica, sans-serif",
};

export default function SplashLogo({
  tagline,
  version,
  taglineId,
  versionId,
  className,
}) {
  return h(
    "svg",
    {
      className,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 500 200",
      "aria-label": "DocCells",
      role: "img",
    },
    h("rect", { width: 500, height: 200, fill: "#ffffff" }),
    h(
      "g",
      { transform: "translate(40,36)" },
      RECT_COLORS.map((fill, index) =>
        h("rect", {
          key: index,
          x: index % 2 === 0 ? 0 : 68,
          y: index < 2 ? 0 : 68,
          width: 60,
          height: 60,
          rx: 12,
          fill,
        }),
      ),
    ),
    h(
      "text",
      {
        x: 208,
        y: 80,
        fontSize: 48,
        fontWeight: 700,
        fill: "#1e293b",
        fontFamily: "Arial, Helvetica, sans-serif",
      },
      "DocCells",
    ),
    h(
      "text",
      {
        id: taglineId,
        x: 208,
        y: 130,
        fontSize: 22,
        fontWeight: 400,
        ...TEXT_STYLE,
      },
      tagline,
    ),
    h(
      "text",
      {
        id: versionId,
        x: 208,
        y: 154,
        fontSize: 13,
        fontWeight: 400,
        ...TEXT_STYLE,
      },
      version,
    ),
  );
}
