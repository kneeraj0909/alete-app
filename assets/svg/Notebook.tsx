import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface NotebookIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function NotebookIcon({pathProps, svgProps}: NotebookIconProps) {
  return (
    <Svg width="19" height="21" fill="none" {...svgProps}>
      <Path
        d="M17.865 4.479 13.96.572a.781.781 0 0 0-.553-.228H5.594A1.562 1.562 0 0 0 4.03 1.906V3.47H2.47A1.562 1.562 0 0 0 .906 5.03v14.063a1.562 1.562 0 0 0 1.563 1.562h10.937a1.562 1.562 0 0 0 1.563-1.562V17.53h1.562a1.562 1.562 0 0 0 1.563-1.562V5.03a.783.783 0 0 0-.229-.552Zm-4.459 14.615H2.47V5.03h7.489l3.448 3.448v10.615Zm3.125-3.125H14.97V8.156a.783.783 0 0 0-.229-.552l-3.906-3.907a.781.781 0 0 0-.553-.228H5.594V1.906h7.489l3.448 3.448V15.97Zm-5.468-3.125a.781.781 0 0 1-.782.781H5.594a.781.781 0 1 1 0-1.563h4.687a.781.781 0 0 1 .781.782Zm0 3.125a.781.781 0 0 1-.782.781H5.594a.781.781 0 1 1 0-1.563h4.687a.781.781 0 0 1 .781.782Z"
        fill="#033381"
        {...pathProps}
      />
    </Svg>
  );
}
