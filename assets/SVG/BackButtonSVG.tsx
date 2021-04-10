import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface props {
  size?: any;
  color?: any;
}

function BackButtonSVG({size, color}) {
  return (
    <Svg
      x="0px"
      width={size}
      height={size}
      fill={color}
      y="0px"
      viewBox="0 0 512 512">
      <Path d="M379.644 477.872l-207.299-207.73c-7.798-7.798-7.798-20.486.015-28.299L379.643 34.128c7.803-7.819 7.789-20.482-.029-28.284-7.819-7.803-20.482-7.79-28.284.029L144.061 213.574c-23.394 23.394-23.394 61.459-.015 84.838L351.33 506.127A19.936 19.936 0 00365.487 512a19.94 19.94 0 0014.128-5.844c7.818-7.802 7.831-20.465.029-28.284z" />
    </Svg>
  );
}

export default BackButtonSVG;
