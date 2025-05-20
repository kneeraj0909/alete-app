import React from 'react';
import {Path, PathProps, Svg, SvgProps} from 'react-native-svg';

export interface AddressIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function AddressIcon({pathProps, svgProps}: AddressIconProps) {
  return (
    <Svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...svgProps}>
      <Path
        d="M0 16.5509H8.23297V0.0849609H0V16.5509ZM5.1456 2.1432H7.20385V4.20144H5.1456V2.1432ZM5.1456 6.25969H7.20385V8.31793H5.1456V6.25969ZM5.1456 10.3762H7.20385V12.4344H5.1456V10.3762ZM1.02912 2.1432H3.08736V4.20144H1.02912V2.1432ZM1.02912 6.25969H3.08736V8.31793H1.02912V6.25969ZM1.02912 10.3762H3.08736V12.4344H1.02912V10.3762ZM9.26209 5.23057H16.4659V6.25969H9.26209V5.23057ZM9.26209 16.5509H11.3203V12.4344H14.4077V16.5509H16.4659V7.28881H9.26209V16.5509Z"
        fill="#E4CCFF"
        {...pathProps}
      />
    </Svg>
  );
}
