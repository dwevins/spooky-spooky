export const PowerButton = ({ onClick }) => (
  <svg width="161" height="68" fill="#fff">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
        <stop stopColor="#2F2F2F" offset="0%"></stop>
        <stop stopColor="#191919" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g transform="translate(-3)" fill="none">
      <path
        d="M22.55 0H143.5C154.822 0 164 9.178 164 20.5a27.474 27.474 0 01-19.651 26.337L79.276 66.165a35.5 35.5 0 01-30.256-4.801L11.5 35.5C2.647 29.397.417 17.273 6.52 8.42A19.47 19.47 0 0122.55 0z"
        fill="url(#a)"
        mask="url(#b)"
        onClick={onClick}
      />
    </g>
  </svg>
);
