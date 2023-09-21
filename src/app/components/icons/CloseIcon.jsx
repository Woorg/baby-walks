const CloseIcon = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_54)">
        <g filter="url(#filter0_i_1_54)">
          <circle
            cx="40"
            cy="40"
            r="40"
            transform="rotate(-180 40 40)"
            fill="white"
          />
        </g>
        <path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.5373 55.0627C51.7869 56.3124 53.8131 56.3124 55.0627 55.0627C56.3124 53.8131 56.3124 51.7869 55.0627 50.5373L44.5255 40L55.0627 29.4627C56.3124 28.2131 56.3124 26.1869 55.0627 24.9373C53.8131 23.6876 51.7869 23.6876 50.5373 24.9373L40 35.4745L29.4627 24.9373C28.2131 23.6876 26.1869 23.6876 24.9373 24.9373C23.6876 26.1869 23.6876 28.2131 24.9373 29.4627L35.4745 40L24.9373 50.5373C23.6876 51.7869 23.6876 53.8131 24.9373 55.0627C26.1869 56.3124 28.2131 56.3124 29.4627 55.0627L40 44.5255L50.5373 55.0627Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_54"
          x="0"
          y="0"
          width="80"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="9.6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1_54"
          />
        </filter>
        <clipPath id="clip0_1_54">
          <rect
            width="80"
            height="80"
            fill="white"
            transform="translate(80 80) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseIcon;
