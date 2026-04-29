// Cannabis leaf — used in logo + decoration
function CannabisLeaf({ fill = "#C25E2C", scale = 1, x = 0, y = 0 }) {
  const s = scale;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M 0 -22 L 4 -8 L 14 -16 L 8 -2 L 22 -4 L 11 5 L 20 14 L 5 9 L 2 22 L -2 9 L -17 14 L -8 5 L -19 -4 L -5 -2 L -11 -16 L -1 -8 Z"
            fill={fill} stroke="none" strokeLinejoin="round" />
      <line x1="0" y1="-22" x2="0" y2="22" stroke={fill} strokeWidth="0.5" opacity="0.4" />
    </g>
  );
}
window.CannabisLeaf = CannabisLeaf;
