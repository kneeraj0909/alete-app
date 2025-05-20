import React from 'react';
import {
  Path,
  PathProps,
  Svg,
  SvgProps,
} from 'react-native-svg';

export interface ContactIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function ContactIcon({pathProps, svgProps}: ContactIconProps) {
  return (
    <Svg width="6" height="5" fill="none" {...svgProps}>
      <Path
        d="M.39.187a.44.44 0 0 1 .67.299l.122.734a.44.44 0 0 1-.19.438l-.44.294A3.952 3.952 0 0 1 .391.83V.187Zm3.953 4.595c-.38 0-.758-.054-1.122-.162l.294-.439a.44.44 0 0 1 .438-.19l.734.123a.44.44 0 0 1 .299.668h-.643Z"
        fill="#E4CCFF"
        {...pathProps}
      />
    </Svg>
  );
}
