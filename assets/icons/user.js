import * as React from "react";
import Svg, { Path } from "react-native-svg";

const User = ({ stroke }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeOpacity={0.8}
    clipRule="evenodd"
  >
    <Path d="M28 29v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2" />
    <Path d="M20 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  </Svg>
);

export default User;
