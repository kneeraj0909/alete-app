import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface EyeShowIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function EyeShowIcon({pathProps, svgProps}: EyeShowIconProps) {
  return (
    <Svg width="17" height="12" fill="none" {...svgProps}>
      <Path
        d="M12.21 9.948a6.335 6.335 0 0 1-3.737 1.295c-4.403 0-6.92-5.032-6.92-5.032a11.606 11.606 0 0 1 3.184-3.736M7.152 1.33a5.737 5.737 0 0 1 1.321-.151c4.403 0 6.92 5.032 6.92 5.032a11.636 11.636 0 0 1-1.36 2.007m-4.226-.673A1.887 1.887 0 1 1 7.14 4.878"
        stroke="#000"
        strokeOpacity=".29"
        strokeWidth="1.258"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
