import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface DownArrowIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function DownArrowIcon({pathProps, svgProps}: DownArrowIconProps) {
  return (
    <Svg width="14" height="8" fill="none" {...svgProps}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.289 7.657.632 2 2.046.586l4.95 4.95 4.95-4.95L13.36 2 7.703 7.657a1 1 0 0 1-1.414 0Z"
        fill="#033381"
        {...pathProps}
      />
    </Svg>
  );
}
