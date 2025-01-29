import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const AgentBg = (props: SvgProps) => (
  <Svg width={395} height={674} fill="none" {...props}>
    <Path fill="url(#a)" stroke="#000" d="M394 363 1 672V1h393v362Z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={197.5}
        x2={197.5}
        y1={1}
        y2={672}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#660708" />
        <Stop offset={0.355} stopColor="#AD1D2B" />
        <Stop offset={1} stopColor="#DE070B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default AgentBg;
