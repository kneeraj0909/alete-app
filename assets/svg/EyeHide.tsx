import React from 'react';
import {
  ClipPath,
  Defs,
  G,
  Path,
  PathProps,
  Svg,
  SvgProps,
} from 'react-native-svg';

export interface EyeHideIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function EyeHideIcon({pathProps, svgProps}: EyeHideIconProps) {
  return (
    <Svg width="17" height="16" fill="none" {...svgProps}>
      <G
        clipPath="url(#a)"
        stroke="#000"
        strokeWidth="1.258"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path
          d="M12.21 11.948a6.335 6.335 0 0 1-3.737 1.295c-4.403 0-6.92-5.032-6.92-5.032a11.606 11.606 0 0 1 3.184-3.736M7.152 3.33a5.737 5.737 0 0 1 1.321-.151c4.403 0 6.92 5.032 6.92 5.032a11.635 11.635 0 0 1-1.36 2.007m-4.226-.673A1.887 1.887 0 1 1 7.14 6.878"
          strokeOpacity=".29"
          {...pathProps}
        />
        <Path
          d="M1.554 1.291 15.393 15.13"
          strokeOpacity=".19"
          {...pathProps}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path
            fill="#fff"
            transform="translate(.925 .662)"
            d="M0 0h15.097v15.097H0z"
            {...pathProps}
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
