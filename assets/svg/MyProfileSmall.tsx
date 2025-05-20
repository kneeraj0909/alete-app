import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface MyProfileSmallProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function MyProfileSmall({pathProps, svgProps}: MyProfileSmallProps) {
  return (
    <Svg width="16" height="16" fill="none" {...svgProps}>
      <Path
        d="M8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c4.42 0 8 1.79 8 4v2H0v-2c0-2.21 3.58-4 8-4Z"
        fill="#0D99FF"
        {...pathProps}
      />
    </Svg>
  );
}
