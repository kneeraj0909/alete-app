import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface LeftArrowIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function LeftArrowIcon({pathProps, svgProps}: LeftArrowIconProps) {
  return (
    <Svg width="11" height="11" fill="none" {...svgProps}>
      <Path
        d="m2.63 6.188 3.85 3.85L5.5 11 0 5.5 5.5 0l.98.963-3.85 3.85H11v1.375H2.63Z"
        fill="#0D99FF"
        {...pathProps}
      />
    </Svg>
  );
}
