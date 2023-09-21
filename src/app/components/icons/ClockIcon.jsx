const ClockIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
    >
      <path
        d="M33.9386 12.9757C39.6406 19.6689 38.5714 30.0677 31.3835 36.1911C24.1956 42.3146 13.7591 41.7176 8.0571 35.0245C2.35515 28.3313 3.42428 17.9325 10.6122 11.8091C17.8001 5.68561 28.2367 6.2826 33.9386 12.9757Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <mask id="path-2-inside-1_1_2272" fill="white">
        <path d="M39.7966 12.1347C37.9107 8.46474 34.6783 5.64478 30.701 4.19977L29.8015 6.3024C33.2613 7.55942 36.0732 10.0125 37.7138 13.205L39.7966 12.1347Z" />
      </mask>
      <path
        d="M39.7966 12.1347C37.9107 8.46474 34.6783 5.64478 30.701 4.19977L29.8015 6.3024C33.2613 7.55942 36.0732 10.0125 37.7138 13.205L39.7966 12.1347Z"
        fill="white"
        stroke="black"
        strokeWidth="4"
        mask="url(#path-2-inside-1_1_2272)"
      />
      <mask id="path-3-inside-2_1_2272" fill="white">
        <path d="M20.097 3.1432C15.7815 3.26144 11.5856 4.89295 8.29055 7.734L9.78617 9.37684C12.6526 6.9054 16.3026 5.48615 20.0567 5.38328L20.097 3.1432Z" />
      </mask>
      <path
        d="M20.097 3.1432C15.7815 3.26144 11.5856 4.89295 8.29055 7.734L9.78617 9.37684C12.6526 6.9054 16.3026 5.48615 20.0567 5.38328L20.097 3.1432Z"
        fill="white"
        stroke="black"
        strokeWidth="4"
        mask="url(#path-3-inside-2_1_2272)"
      />
      <path d="M22 16L21.1818 24.6957L13 26" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default ClockIcon;
