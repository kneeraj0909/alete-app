import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface LogoutIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function LogoutIcon({pathProps, svgProps}: LogoutIconProps) {
  return (
    <Svg width="17" height="17" fill="none" {...svgProps}>
      <Path
        d="M6.375 14.875H3.542a1.417 1.417 0 0 1-1.417-1.417V3.542a1.417 1.417 0 0 1 1.417-1.417h2.833M11.333 12.041 14.875 8.5l-3.542-3.542M14.875 8.5h-8.5"
        stroke="#000"
        strokeWidth="1.417"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
