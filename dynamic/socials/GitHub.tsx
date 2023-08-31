import * as React from "react";

function Icon({
  color
}: {
  color: string
}) {
  return (
    <svg
      width={31}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 0C6.936 0 0 6.936 0 15.5c0 6.859 4.437 12.652 10.598 14.706.775.135 1.066-.33 1.066-.737 0-.368-.02-1.588-.02-2.887-3.894.717-4.902-.949-5.212-1.82-.174-.446-.93-1.822-1.588-2.19-.543-.29-1.318-1.008-.02-1.027 1.221-.02 2.093 1.124 2.383 1.589 1.395 2.344 3.624 1.685 4.515 1.279.136-1.008.542-1.686.988-2.074-3.449-.387-7.053-1.724-7.053-7.653 0-1.685.601-3.08 1.59-4.165-.156-.388-.698-1.977.154-4.108 0 0 1.298-.407 4.263 1.589a14.383 14.383 0 013.875-.523c1.317 0 2.635.174 3.875.523 2.964-2.015 4.262-1.589 4.262-1.589.853 2.131.31 3.72.155 4.108.988 1.085 1.589 2.46 1.589 4.165 0 5.948-3.623 7.266-7.072 7.653.562.485 1.046 1.415 1.046 2.868 0 2.073-.019 3.74-.019 4.262 0 .407.29.892 1.066.737A15.525 15.525 0 0031 15.5C31 6.936 24.064 0 15.5 0z"
        fill={color}
      />
    </svg>
  );
}

export default Icon;