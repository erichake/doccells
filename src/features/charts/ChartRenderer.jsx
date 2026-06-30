/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CHART_COLORS, extractChartData, normalizeChart } from "./chartUtils.js";

const formatValue = (value) =>
  Number.isInteger(value) ? String(value) : Number(value.toFixed(2)).toString();

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const arePositionsEqual = (left, right) =>
  left?.left === right?.left &&
  left?.top === right?.top &&
  left?.width === right?.width &&
  left?.height === right?.height;

const getChartTypography = (width, height) => {
  const base = Math.sqrt(Math.max(1, width * height));
  const axisFontSize = clamp(base / 24, 10, 20);
  return {
    axisFontSize,
    labelFontSize: clamp(axisFontSize * 0.96, 10, 18),
    valueFontSize: clamp(axisFontSize * 0.9, 9, 16),
    pieValueFontSize: clamp(axisFontSize, 10, 18),
    tickLength: clamp(axisFontSize * 0.45, 4, 8),
  };
};

const niceStep = (span, targetTicks = 6) => {
  if (!Number.isFinite(span) || span <= 0) return 1;
  const rough = span / targetTicks;
  const power = 10 ** Math.floor(Math.log10(rough));
  const fraction = rough / power;
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * power;
};

const getScale = (points, pad, height) => {
  const rawMin = Math.min(0, ...points.map((point) => point.value));
  const rawMax = Math.max(0, ...points.map((point) => point.value));
  const step = niceStep(rawMax - rawMin || Math.abs(rawMax) || 1);
  const minValue = Math.min(0, Math.floor(rawMin / step) * step);
  const maxValue = Math.max(step, Math.ceil(rawMax / step) * step);
  const chartHeight = height - pad.top - pad.bottom;
  const span = maxValue - minValue || 1;
  const ticks = [];
  for (let value = minValue; value <= maxValue + step / 2; value += step) {
    ticks.push(Number(value.toFixed(10)));
  }
  const getY = (value) => pad.top + ((maxValue - value) / span) * chartHeight;
  return {
    ticks,
    getY,
    zeroY: getY(0),
    chartHeight,
  };
};

const getHorizontalScale = (points, pad, width) => {
  const rawMin = Math.min(0, ...points.map((point) => point.x));
  const rawMax = Math.max(0, ...points.map((point) => point.x));
  const step = niceStep(rawMax - rawMin || Math.abs(rawMax) || 1);
  const minValue = Math.min(0, Math.floor(rawMin / step) * step);
  const maxValue = Math.max(step, Math.ceil(rawMax / step) * step);
  const chartWidth = width - pad.left - pad.right;
  const span = maxValue - minValue || 1;
  const getX = (value) => pad.left + ((value - minValue) / span) * chartWidth;
  return {
    getX,
    chartWidth,
  };
};

const HorizontalGuides = ({
  ticks,
  getY,
  pad,
  chartWidth,
  showYAxis,
  showGridlines,
  fontSize,
}) => (
  <>
    {ticks.map((tick) => {
      const y = getY(tick);
      return (
        <g key={tick}>
          {showGridlines && (
            <line
              className="dc-chart-gridline"
              x1={pad.left}
              y1={y}
              x2={pad.left + chartWidth}
              y2={y}
            />
          )}
          {showYAxis && (
            <text
              className="dc-chart-axis-label"
              x={pad.left - 8}
              y={y + fontSize * 0.36}
              fontSize={fontSize}
              textAnchor="end"
            >
              {formatValue(tick)}
            </text>
          )}
        </g>
      );
    })}
  </>
);

const shouldRotateLabels = (points, slotWidth, fontSize) => {
  const longest = points.reduce(
    (max, point) => Math.max(max, String(point.label || "").length),
    0,
  );
  return longest * fontSize * 0.55 > slotWidth * 0.9;
};

const CategoryLabel = ({ label, x, axisY, rotate, fontSize }) => {
  const text = String(label).slice(0, 10);
  if (rotate) {
    const y = axisY + fontSize * 0.88;
    return (
      <text
        className="dc-chart-label"
        x={x}
        y={y}
        fontSize={fontSize}
        textAnchor="end"
        dominantBaseline="middle"
        transform={`rotate(-90 ${x} ${y})`}
      >
        {text}
      </text>
    );
  }
  return (
    <text
      className="dc-chart-label"
      x={x}
      y={axisY + fontSize * 0.72}
      fontSize={fontSize}
      textAnchor="middle"
      dominantBaseline="hanging"
    >
      {text}
    </text>
  );
};

const CategoryTick = ({ x, axisY, length }) => (
  <line
    className="dc-chart-x-tick"
    x1={x}
    y1={axisY}
    x2={x}
    y2={axisY + length}
  />
);

const BarChart = ({
  points,
  showValues,
  color,
  showXAxis,
  showYAxis,
  showGridlines,
  width = 320,
  height = 170,
}) => {
  const typography = getChartTypography(width, height);
  const baseLeft = showYAxis ? Math.ceil(typography.axisFontSize * 3.1) : 20;
  const preliminarySlot = (width - baseLeft - 18) / points.length;
  const rotateLabels =
    showXAxis && shouldRotateLabels(points, preliminarySlot, typography.labelFontSize);
  const pad = {
    top: Math.ceil(typography.axisFontSize * 0.9),
    right: 18,
    bottom: showXAxis
      ? rotateLabels
        ? Math.ceil(typography.labelFontSize * 3.2)
        : Math.ceil(typography.labelFontSize * 1.9)
      : Math.ceil(typography.tickLength + 4),
    left: baseLeft,
  };
  const chartWidth = width - pad.left - pad.right;
  const { ticks, getY, zeroY, chartHeight } = getScale(points, pad, height);
  const slotWidth = chartWidth / points.length;
  const barWidth = Math.max(1, Math.min(22, slotWidth * 0.42));
  const seriesColor = color || "#4F81BD";

  return (
    <svg className="dc-chart-svg" viewBox={`0 0 ${width} ${height}`} role="img">
      <HorizontalGuides
        ticks={ticks}
        getY={getY}
        pad={pad}
        chartWidth={chartWidth}
        showYAxis={showYAxis}
        showGridlines={showGridlines}
        fontSize={typography.axisFontSize}
      />
      <line
        className="dc-chart-axis"
        x1={pad.left}
        y1={pad.top}
        x2={pad.left}
        y2={pad.top + chartHeight}
      />
      <line
        className="dc-chart-axis"
        x1={pad.left}
        y1={zeroY}
        x2={pad.left + chartWidth}
        y2={zeroY}
      />
      {points.map((point, index) => {
        const centerX = pad.left + index * slotWidth + slotWidth / 2;
        const x = centerX - barWidth / 2;
        const y = getY(Math.max(0, point.value));
        const valueY = getY(point.value);
        const h = Math.max(1, Math.abs(zeroY - valueY));
        return (
          <g key={`${point.label}-${index}`}>
            {showXAxis && (
              <CategoryTick
                x={centerX}
                axisY={zeroY}
                length={typography.tickLength}
              />
            )}
            <rect
              x={x}
              y={point.value >= 0 ? y : zeroY}
              width={barWidth}
              height={h}
              fill={seriesColor}
            />
            {showValues && (
              <text
                className="dc-chart-value"
                x={x + barWidth / 2}
                y={point.value >= 0 ? y - 5 : zeroY + h + typography.valueFontSize + 4}
                fontSize={typography.valueFontSize}
                textAnchor="middle"
              >
                {formatValue(point.value)}
              </text>
            )}
            {showXAxis && (
              <CategoryLabel
                label={point.label}
                x={centerX}
                axisY={zeroY}
                rotate={rotateLabels}
                fontSize={typography.labelFontSize}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};

const LineChart = ({
  points,
  showValues,
  color,
  showXAxis,
  showYAxis,
  showGridlines,
  width = 320,
  height = 170,
}) => {
  const typography = getChartTypography(width, height);
  const baseLeft = showYAxis ? Math.ceil(typography.axisFontSize * 3.1) : 20;
  const preliminarySlot = points.length <= 1
    ? width - baseLeft - 18
    : (width - baseLeft - 18) / (points.length - 1);
  const rotateLabels =
    showXAxis && shouldRotateLabels(points, preliminarySlot, typography.labelFontSize);
  const pad = {
    top: Math.ceil(typography.axisFontSize),
    right: 18,
    bottom: showXAxis
      ? rotateLabels
        ? Math.ceil(typography.labelFontSize * 3.2)
        : Math.ceil(typography.labelFontSize * 1.9)
      : Math.ceil(typography.tickLength + 4),
    left: baseLeft,
  };
  const chartWidth = width - pad.left - pad.right;
  const { ticks, getY, zeroY, chartHeight } = getScale(points, pad, height);
  const seriesColor = color || "#4F81BD";
  const getX = (index) =>
    points.length === 1
      ? pad.left + chartWidth / 2
      : pad.left + (index / (points.length - 1)) * chartWidth;
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${getX(index)} ${getY(point.value)}`).join(" ");

  return (
    <svg
      className="dc-chart-svg"
      style={{ "--dc-chart-series-color": seriesColor }}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
    >
      <HorizontalGuides
        ticks={ticks}
        getY={getY}
        pad={pad}
        chartWidth={chartWidth}
        showYAxis={showYAxis}
        showGridlines={showGridlines}
        fontSize={typography.axisFontSize}
      />
      <line
        className="dc-chart-axis"
        x1={pad.left}
        y1={pad.top}
        x2={pad.left}
        y2={pad.top + chartHeight}
      />
      <line
        className="dc-chart-axis"
        x1={pad.left}
        y1={zeroY}
        x2={pad.left + chartWidth}
        y2={zeroY}
      />
      <path className="dc-chart-line" d={path} />
      {points.map((point, index) => (
        <g key={`${point.label}-${index}`}>
          {showXAxis && (
            <CategoryTick
              x={getX(index)}
              axisY={zeroY}
              length={typography.tickLength}
            />
          )}
          <circle cx={getX(index)} cy={getY(point.value)} r="4" />
          {showValues && (
            <text
              className="dc-chart-value"
              x={getX(index)}
              y={getY(point.value) - 8}
              fontSize={typography.valueFontSize}
              textAnchor="middle"
            >
              {formatValue(point.value)}
            </text>
          )}
          {showXAxis && (
            <CategoryLabel
              label={point.label}
              x={getX(index)}
              axisY={zeroY}
              rotate={rotateLabels}
              fontSize={typography.labelFontSize}
            />
          )}
        </g>
      ))}
    </svg>
  );
};

const ScatterChart = ({
  points,
  showValues,
  color,
  showXAxis,
  showYAxis,
  showGridlines,
  width = 320,
  height = 170,
}) => {
  const typography = getChartTypography(width, height);
  const baseLeft = showYAxis ? Math.ceil(typography.axisFontSize * 3.1) : 20;
  const preliminarySlot = (width - baseLeft - 18) / Math.max(1, points.length - 1);
  const rotateLabels =
    showXAxis && shouldRotateLabels(points, preliminarySlot, typography.labelFontSize);
  const pad = {
    top: Math.ceil(typography.axisFontSize),
    right: 18,
    bottom: showXAxis
      ? rotateLabels
        ? Math.ceil(typography.labelFontSize * 3.2)
        : Math.ceil(typography.labelFontSize * 1.9)
      : Math.ceil(typography.tickLength + 4),
    left: baseLeft,
  };
  const { ticks, getY, zeroY, chartHeight } = getScale(points, pad, height);
  const { getX, chartWidth } = getHorizontalScale(points, pad, width);
  const seriesColor = color || "#4F81BD";

  return (
    <svg
      className="dc-chart-svg"
      style={{ "--dc-chart-series-color": seriesColor }}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
    >
      <HorizontalGuides
        ticks={ticks}
        getY={getY}
        pad={pad}
        chartWidth={chartWidth}
        showYAxis={showYAxis}
        showGridlines={showGridlines}
        fontSize={typography.axisFontSize}
      />
      <line
        className="dc-chart-axis"
        x1={pad.left}
        y1={pad.top}
        x2={pad.left}
        y2={pad.top + chartHeight}
      />
      <line
        className="dc-chart-axis"
        x1={pad.left}
        y1={zeroY}
        x2={pad.left + chartWidth}
        y2={zeroY}
      />
      {points.map((point, index) => {
        const x = getX(point.x);
        const y = getY(point.value);
        return (
          <g key={`${point.label}-${index}`}>
            {showXAxis && (
              <CategoryTick
                x={x}
                axisY={zeroY}
                length={typography.tickLength}
              />
            )}
            <circle cx={x} cy={y} r={clamp(typography.axisFontSize * 0.28, 3, 6)} />
            {showValues && (
              <text
                className="dc-chart-value"
                x={x}
                y={y - 8}
                fontSize={typography.valueFontSize}
                textAnchor="middle"
              >
                {formatValue(point.value)}
              </text>
            )}
            {showXAxis && (
              <CategoryLabel
                label={point.label}
                x={x}
                axisY={zeroY}
                rotate={rotateLabels}
                fontSize={typography.labelFontSize}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};

const polarToCartesian = (cx, cy, radius, angle) => {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  };
};

const describeArc = (cx, cy, radius, startAngle, endAngle) => {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    cx,
    cy,
    "L",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArc,
    0,
    end.x,
    end.y,
    "Z",
  ].join(" ");
};

const PieChart = ({ points, showValues, width = 320, height = 170 }) => {
  const typography = getChartTypography(width, height);
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.max(28, Math.min(width, height) * 0.38);
  const total = points.reduce((sum, point) => sum + Math.max(0, point.value), 0);
  let angle = 0;

  return (
    <svg className="dc-chart-svg" viewBox={`0 0 ${width} ${height}`} role="img">
      {points.map((point, index) => {
        const slice = total ? (Math.max(0, point.value) / total) * 360 : 0;
        const start = angle;
        const end = angle + slice;
        angle = end;
        const mid = (start + end) / 2;
        const labelPoint = polarToCartesian(cx, cy, radius * 0.68, mid);
        return (
          <g key={`${point.label}-${index}`}>
            <path
              d={describeArc(cx, cy, radius, start, end)}
              fill={CHART_COLORS[index % CHART_COLORS.length]}
            />
            {showValues && slice > 14 && (
              <text
                className="dc-chart-pie-value"
                x={labelPoint.x}
                y={labelPoint.y}
                fontSize={typography.pieValueFontSize}
                textAnchor="middle"
                dominantBaseline="central"
              >
                {Math.round((point.value / total) * 100)}%
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

const PieLegend = ({ points }) => (
  <div className="dc-chart-legend">
    {points.map((point, index) => (
      <span key={`${point.label}-${index}`}>
        <i style={{ background: CHART_COLORS[index % CHART_COLORS.length] }} />
        {point.label}
      </span>
    ))}
  </div>
);

const SeriesLegend = ({ title, color }) => (
  <div className="dc-chart-legend dc-chart-series-legend">
    <span>
      <i style={{ background: color }} />
      {title || "Graphique"}
    </span>
  </div>
);

export const ChartCard = ({
  chart,
  sheet,
  sheetIndex,
  editable,
  onEdit,
  onDelete,
  onPositionChange,
}) => {
  const normalized = useMemo(() => normalizeChart(chart), [chart]);
  const { points, error } = extractChartData(sheet, normalized);
  const [draftPosition, setDraftPosition] = useState(normalized.position);
  const [dragState, setDragState] = useState(null);
  const [resizeState, setResizeState] = useState(null);
  const [chartSize, setChartSize] = useState({ width: 320, height: 170 });
  const cardRef = useRef(null);
  const chartSlotRef = useRef(null);
  const pendingPositionRef = useRef(null);
  const {
    left: normalizedLeft,
    top: normalizedTop,
    width: normalizedWidth,
    height: normalizedHeight,
  } = normalized.position;

  useEffect(() => {
    if (dragState || resizeState) return;
    const normalizedPosition = {
      left: normalizedLeft,
      top: normalizedTop,
      width: normalizedWidth,
      height: normalizedHeight,
    };
    setDraftPosition((current) =>
      arePositionsEqual(current, normalizedPosition) ? current : normalizedPosition,
    );
  }, [
    dragState,
    normalizedHeight,
    normalizedLeft,
    normalizedTop,
    normalizedWidth,
    resizeState,
  ]);

  useEffect(() => {
    const node = chartSlotRef.current;
    if (!node || typeof ResizeObserver === "undefined") return undefined;
    const updateSize = () => {
      const rect = node.getBoundingClientRect();
      const nextSize = {
        width: Math.max(160, Math.round(rect.width)),
        height: Math.max(90, Math.round(rect.height)),
      };
      setChartSize((current) =>
        current.width === nextSize.width && current.height === nextSize.height
          ? current
          : nextSize,
      );
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stopEvents = (event) => {
    event.stopPropagation();
  };

  const startDrag = useCallback(
    (event) => {
      if (!editable || event.button !== 0 || event.target.closest("button")) return;
      event.preventDefault();
      pendingPositionRef.current = null;
      setDragState({
        startX: event.clientX,
        startY: event.clientY,
        position: draftPosition,
      });
    },
    [draftPosition, editable],
  );

  const startResize = useCallback(
    (event) => {
      if (!editable || event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      pendingPositionRef.current = null;
      setResizeState({
        startX: event.clientX,
        startY: event.clientY,
        position: draftPosition,
      });
    },
    [draftPosition, editable],
  );

  useEffect(() => {
    if (!dragState && !resizeState) return undefined;

    const handleMove = (event) => {
      if (dragState) {
        const nextPosition = {
          ...dragState.position,
          left: Math.max(8, dragState.position.left + event.clientX - dragState.startX),
          top: Math.max(48, dragState.position.top + event.clientY - dragState.startY),
        };
        pendingPositionRef.current = nextPosition;
        setDraftPosition(nextPosition);
      }
      if (resizeState) {
        const nextPosition = {
          ...resizeState.position,
          width: Math.max(260, resizeState.position.width + event.clientX - resizeState.startX),
          height: Math.max(190, resizeState.position.height + event.clientY - resizeState.startY),
        };
        pendingPositionRef.current = nextPosition;
        setDraftPosition(nextPosition);
      }
    };
    const stop = () => {
      const nextPosition = pendingPositionRef.current;
      if (nextPosition) {
        onPositionChange(normalized.id, nextPosition, sheetIndex);
        pendingPositionRef.current = null;
      }
      setDragState(null);
      setResizeState(null);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stop);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", stop);
    };
  }, [dragState, normalized.id, onPositionChange, resizeState, sheetIndex]);

  const Chart =
    normalized.type === "line"
      ? LineChart
      : normalized.type === "scatter"
        ? ScatterChart
        : normalized.type === "pie"
          ? PieChart
          : BarChart;

  return (
    <article
      ref={cardRef}
      className="dc-chart-card"
      data-sheet-id={sheet?.id == null ? "" : String(sheet.id)}
      data-sheet-name={sheet?.name || ""}
      style={{
        left: draftPosition.left,
        top: draftPosition.top,
        width: draftPosition.width,
        height: draftPosition.height,
      }}
      onMouseDown={stopEvents}
      onClick={stopEvents}
    >
      <header className="dc-chart-card-header" onMouseDown={startDrag}>
        <div>
          <strong>{normalized.title}</strong>
          <span>{normalized.rangeText}</span>
        </div>
        {editable && (
          <div className="dc-chart-card-actions">
            <button type="button" onClick={() => onEdit(normalized, sheetIndex)}>
              Modifier
            </button>
            <button type="button" onClick={() => onDelete(normalized.id, sheetIndex)}>
              Supprimer
            </button>
          </div>
        )}
      </header>
      <div className="dc-chart-card-body">
        {error ? (
          <div className="dc-chart-card-error">{error}</div>
        ) : (
          <>
            <div className="dc-chart-plot" ref={chartSlotRef}>
              <Chart
                points={points}
              showValues={normalized.showValues}
              color={normalized.color}
              showXAxis={normalized.showXAxis}
              showYAxis={normalized.showYAxis}
                showGridlines={normalized.showGridlines}
                width={chartSize.width}
                height={chartSize.height}
              />
            </div>
            {normalized.showLegend &&
              (normalized.type === "pie" ? (
                <PieLegend points={points} />
              ) : (
                <SeriesLegend title={normalized.title} color={normalized.color} />
              ))}
          </>
        )}
      </div>
      {editable && (
        <button
          className="dc-chart-resize"
          type="button"
          aria-label="Redimensionner"
          title="Redimensionner"
          onMouseDown={startResize}
        />
      )}
    </article>
  );
};

export const ChartLayer = ({
  sheets = [],
  activeSheetIndex = 0,
  appMode,
  onEdit,
  onDelete,
  onPositionChange,
}) => {
  const layerRef = useRef(null);
  const lastActiveSheetRef = useRef(null);
  const chartEntries = sheets.flatMap((sheet, sheetIndex) =>
    (sheet?.customCharts || []).map((chart) => ({
      chart: normalizeChart(chart),
      sheet,
      sheetIndex,
    })),
  );

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;

    const getActiveSheet = () => {
      const activeName = document
        .querySelector(".luckysheet-sheets-item-active .luckysheet-sheets-item-name")
        ?.textContent
        ?.trim();

      if (activeName) {
        const byName = sheets.find((item) => item?.name === activeName);
        if (byName) {
          lastActiveSheetRef.current = {
            id: byName.id == null ? "" : String(byName.id),
            name: byName.name || "",
          };
          return byName;
        }
      }

      const lastActive = lastActiveSheetRef.current;
      if (lastActive) {
        const byLastActive = sheets.find((item) => {
          const itemId = item?.id == null ? "" : String(item.id);
          const itemName = item?.name || "";
          return (
            (lastActive.id && itemId === lastActive.id) ||
            (!lastActive.id && itemName === lastActive.name)
          );
        });
        if (byLastActive) return byLastActive;
      }

      return sheets[activeSheetIndex] || sheets[0];
    };

    const applyVisibility = () => {
      const activeSheet = getActiveSheet();
      const activeSheetId = activeSheet?.id == null ? "" : String(activeSheet.id);
      const activeSheetName = activeSheet?.name || "";

      layer.querySelectorAll(".dc-chart-card").forEach((card) => {
        const isActiveSheet =
          (activeSheetId && card.dataset.sheetId === activeSheetId) ||
          (!activeSheetId && card.dataset.sheetName === activeSheetName);
        card.hidden = !isActiveSheet;
        card.style.display = isActiveSheet ? "" : "none";
      });
    };

    applyVisibility();

    const tabContainer =
      document.getElementById("fortune-sheettab-container-c") ||
      document.getElementById("fortune-sheettab-container");
    const observer = tabContainer ? new MutationObserver(applyVisibility) : null;

    observer?.observe(tabContainer, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      subtree: true,
    });

    return () => observer?.disconnect();
  }, [activeSheetIndex, sheets]);

  if (!chartEntries.length) return null;

  return (
    <div className="dc-chart-layer" aria-live="polite" ref={layerRef}>
      {chartEntries.map(({ chart, sheet, sheetIndex }) => (
        <ChartCard
          key={`${sheet?.id ?? sheetIndex}-${chart.id}`}
          chart={chart}
          sheet={sheet}
          sheetIndex={sheetIndex}
          editable={appMode !== "student"}
          onEdit={onEdit}
          onDelete={onDelete}
          onPositionChange={onPositionChange}
        />
      ))}
    </div>
  );
};
