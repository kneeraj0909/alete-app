import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface PlusIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function PlusIcon({pathProps, svgProps}: PlusIconProps) {
  return (
    <Svg width="24" height="24" fill="none" {...svgProps}>
      <Path
        d="M8 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2V6Zm6 0h-4v3a1 1 0 0 1-1 1H6v4h3a1 1 0 0 1 1 1v3h4v-3a1 1 0 0 1 1-1h3v-4h-3a1 1 0 0 1-1-1V6Z"
        fill="#033381"
        {...pathProps}
      />
    </Svg>
  );
}
