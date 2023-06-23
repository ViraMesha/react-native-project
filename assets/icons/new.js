import * as React from "react";
import Svg, { Path } from "react-native-svg";

const User = ({ fill, stroke }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill={fill}
    stroke={stroke}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6z"
    />
  </Svg>
);

export default User;
