import React from 'react';
import {
  Path,
  PathProps,
  Svg,
  SvgProps,
} from 'react-native-svg';

export interface EmailIconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
}

export function EmailIcon({pathProps, svgProps}: EmailIconProps) {
  return (
    <Svg width="14" height="11" fill="none" {...svgProps}>
      <Path
        d="M12.173.176H1.635C.91.176.324.769.324 1.493L.317 9.397c0 .724.593 1.317 1.318 1.317h10.538c.724 0 1.317-.593 1.317-1.317V1.493c0-.724-.593-1.317-1.317-1.317Zm0 2.634-5.27 3.294L1.636 2.81V1.493l5.269 3.293 5.269-3.293V2.81Z"
        fill="#E4CCFF"
        {...pathProps}
      />
    </Svg>
  );
}
