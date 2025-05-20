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

export interface HeathCardIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function HeathCardIcon({pathProps, svgProps}: HeathCardIconProps) {
  return (
    <Svg width="28" height="27" fill="none" {...svgProps}>
      <G clipPath="url(#a)" fill="#033381">
        <Path
          d="M25.813 5.063v16.875H2.188V5.063h23.625ZM27.5 3.375H.5v20.25h27V3.375Z"
          {...pathProps}
        />
        <Path
          d="M15.688 8.438h8.437v1.687h-8.437V8.437Zm0 3.374h8.437V13.5h-8.437v-1.688Zm0 3.376h3.375v1.687h-3.375v-1.688Zm-4.22-6.75c-1.012 0-1.855 1.012-2.53 1.687-.675-.675-1.52-1.688-2.532-1.688-2.53 0-3.543 3.207-1.687 4.894l4.219 3.544 4.218-3.544c1.857-1.687.844-4.893-1.687-4.893Z"
          {...pathProps}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" transform="translate(.5)" d="M0 0h27v27H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
