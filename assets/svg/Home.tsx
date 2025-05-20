import React from 'react';
import {
  Path,
  PathProps,
  Svg,
  SvgProps,
} from 'react-native-svg';

export interface HomeIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function HomeIcon({pathProps, svgProps}: HomeIconProps) {
  return (
    <Svg width="19" height="20" fill="none" {...svgProps}>
      <Path
        d="M2.834 17.778h3.333V11.11h6.667v6.667h3.333v-10l-6.667-5-6.666 5v10ZM.61 20V6.667L9.501 0l8.888 6.667V20h-7.778v-6.667H8.39V20H.611Z"
        fill="#033381"
        {...pathProps}
      />
    </Svg>
  );
}
