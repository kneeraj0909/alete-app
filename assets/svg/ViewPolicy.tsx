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

export interface ViewPolicyIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function ViewPolicyIcon({pathProps, svgProps}: ViewPolicyIconProps) {
  return (
    <Svg width="14" height="14" fill="none" {...svgProps}>
      <G clipPath="url(#a)">
        <Path
          d="M6.727 5.16a1.59 1.59 0 1 0 0 3.182 1.59 1.59 0 0 0 0-3.182Zm0 4.242a2.652 2.652 0 1 1 0-5.303 2.652 2.652 0 0 1 0 5.303Zm0-6.629A6.272 6.272 0 0 0 .894 6.751a6.272 6.272 0 0 0 5.833 3.977 6.272 6.272 0 0 0 5.834-3.977 6.272 6.272 0 0 0-5.834-3.978Z"
          fill="#0D99FF"
          {...pathProps}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path
            fill="#fff"
            transform="translate(.364 .387)"
            d="M0 0h12.727v12.727H0z"
            {...pathProps}
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
