import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface DownloadIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function DownloadIcon({pathProps, svgProps}: DownloadIconProps) {
  return (
    <Svg width="24" height="24" fill="none" {...svgProps}>
      <Path
        d="m12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 4 18v-3h2v3h12v-3h2v3c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 18 20H6Z"
        fill="#033381"
        {...pathProps}
      />
    </Svg>
  );
}
