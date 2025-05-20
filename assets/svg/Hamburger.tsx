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

export interface HamburgerIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function HamburgerIcon({pathProps, svgProps}: HamburgerIconProps) {
  return (
    <Svg width="16" height="16" fill="none" {...svgProps}>
      <G clip-path="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 1 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 1 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 1 0 0 1.5h14.5a.75.75 0 1 0 0-1.5H.75Z"
          fill="#0D99FF"
          {...pathProps}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" {...pathProps} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
