import React from 'react';
import {
  Defs,
  LinearGradient,
  Path,
  PathProps,
  Stop,
  Svg,
  SvgProps,
} from 'react-native-svg';

export interface MyProfileIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function MyProfileIcon({pathProps, svgProps}: MyProfileIconProps) {
  return (
    <Svg width="24" height="24" fill="none" {...svgProps}>
      <Path
        d="M7.013 15.4A2.8 2.8 0 0 0 4.2 18.2c0 2.367 1.166 4.152 2.99 5.315C8.983 24.66 11.402 25.2 14 25.2c2.597 0 5.016-.54 6.811-1.684 1.823-1.162 2.99-2.95 2.99-5.316a2.8 2.8 0 0 0-2.8-2.8H7.012Z"
        fill="url(#a)"
        {...pathProps}
      />
      <Path
        d="M7.013 15.4A2.8 2.8 0 0 0 4.2 18.2c0 2.367 1.166 4.152 2.99 5.315C8.983 24.66 11.402 25.2 14 25.2c2.597 0 5.016-.54 6.811-1.684 1.823-1.162 2.99-2.95 2.99-5.316a2.8 2.8 0 0 0-2.8-2.8H7.012Z"
        fill="url(#b)"
        {...pathProps}
      />
      <Path
        d="M14 2.8A5.6 5.6 0 1 0 14 14a5.6 5.6 0 0 0 0-11.2Z"
        fill="url(#c)"
        {...pathProps}
      />
      <Defs>
        <LinearGradient
          id="a"
          x1="8.861"
          y1="16.703"
          x2="12.028"
          y2="26.814"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.125" stopColor="#9C6CFE" />
          <Stop offset="1" stopColor="#7A41DC" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1="14"
          y1="14.233"
          x2="18.434"
          y2="30.799"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#885EDB" stopOpacity="0" />
          <Stop offset="1" stopColor="#E362F8" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1="11.063"
          y1="4.288"
          x2="16.771"
          y2="13.403"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.125" stopColor="#9C6CFE" />
          <Stop offset="1" stopColor="#7A41DC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
