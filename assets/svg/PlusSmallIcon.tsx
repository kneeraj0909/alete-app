import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface PlusSmallIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function PlusSmallIcon({pathProps, svgProps}: PlusSmallIconProps) {
  return (
    <Svg width="6" height="6" fill="none" {...svgProps}>
      <Path
        d="M5.818 3.388H3.403v2.416h-.806V3.388H.182v-.805h2.415V.168h.806v2.415h2.415v.805Z"
        fill="#0D99FF"
        {...pathProps}
      />
    </Svg>
  );
}
