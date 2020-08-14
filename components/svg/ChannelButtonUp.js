export const ChannelButtonUp = ({ onClick }) => (
  <svg width="82" height="99">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
        <stop stopColor="#2F2F2F" offset="0%" />
        <stop stopColor="#191919" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#898989" offset="100%" />
      </linearGradient>
      <filter
        x="-31.9%"
        y="-23.3%"
        width="163.8%"
        height="149.3%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="6"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <path
        d="M29 0c16.016 0 29 12.984 29 29v17c0 16.016-12.984 29-29 29S0 62.016 0 46V29C0 12.984 12.984 0 29 0z"
        id="b"
      />
    </defs>
    <g fill="none" fillRule="evenodd" onClick={onClick}>
      <g transform="translate(12 11)">
        <use fill="#000" filter="url(#a)" href="#b" />
        <use fill="url(#c)" href="#b" />
      </g>
      <path
        fill="url(#d)"
        opacity=".25"
        d="M29 32l7 11H22z"
        transform="translate(12 11)"
      />
    </g>
  </svg>
);
