import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface DocumentsProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function DocumentsIcon({pathProps, svgProps}: DocumentsProps) {
  return (
    <Svg width="17" height="19" fill="none" {...svgProps}>
      <Path
        d="M16.196 3.96 12.602.366a.719.719 0 0 0-.508-.21H4.906A1.438 1.438 0 0 0 3.47 1.594V3.03H2.03A1.438 1.438 0 0 0 .594 4.47v12.937a1.438 1.438 0 0 0 1.437 1.438h10.063a1.437 1.437 0 0 0 1.437-1.438V15.97h1.438a1.437 1.437 0 0 0 1.437-1.438V4.47a.718.718 0 0 0-.21-.509ZM9.219 15.25H4.906a.719.719 0 1 1 0-1.438H9.22a.719.719 0 1 1 0 1.438Zm0-2.875H4.906a.719.719 0 1 1 0-1.438H9.22a.719.719 0 1 1 0 1.438Zm5.75 2.156H13.53V7.344a.718.718 0 0 0-.21-.509L9.727 3.241a.719.719 0 0 0-.508-.21H4.906V1.594h6.89l3.173 3.172v9.765Z"
        fill="#033381"
        {...pathProps}
      />
    </Svg>
  );
}
