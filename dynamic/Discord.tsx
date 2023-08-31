import * as React from "react";

function SvgDiscord(props: any) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#discord_svg__clip0_2_331)">
        <path
        d="M15.238 3.369a14.997 14.997 0 00-3.664-1.118.056.056 0 00-.06.027c-.157.277-.332.638-.455.923a13.924 13.924 0 00-4.116 0 9.267 9.267 0 00-.462-.923.058.058 0 00-.06-.028c-1.285.217-2.515.6-3.663 1.118a.053.053 0 00-.024.02C.4 6.82-.24 10.166.074 13.471a.06.06 0 00.023.041 15.025 15.025 0 004.495 2.235.059.059 0 00.063-.02c.347-.465.656-.956.92-1.472a.056.056 0 00-.031-.078 9.892 9.892 0 01-1.404-.658.056.056 0 01-.006-.094 8.08 8.08 0 00.279-.215.056.056 0 01.058-.008c2.946 1.323 6.136 1.323 9.046 0a.057.057 0 01.06.007c.09.074.183.146.278.216a.056.056 0 01.015.074.056.056 0 01-.019.02 9.257 9.257 0 01-1.405.658.056.056 0 00-.037.055c0 .008.003.016.006.023.27.515.58 1.006.92 1.472a.058.058 0 00.062.02 14.97 14.97 0 004.502-2.235.057.057 0 00.024-.04c.375-3.821-.629-7.14-2.662-10.082a.045.045 0 00-.023-.021zm-9.223 8.09c-.887 0-1.618-.802-1.618-1.786s.717-1.785 1.618-1.785c.907 0 1.632.808 1.618 1.785 0 .985-.717 1.786-1.618 1.786zm5.981 0c-.887 0-1.617-.802-1.617-1.786s.716-1.785 1.617-1.785c.908 0 1.632.808 1.618 1.785 0 .985-.71 1.786-1.618 1.786z"
        fill="#322"
        />
      </g>
      <defs>
        <clipPath id="discord_svg__clip0_2_331">
        <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { SvgDiscord };