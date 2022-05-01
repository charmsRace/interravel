import { animated, SpringValue } from '@react-spring/web';
import { FC, ReactNode } from 'react';
import { Parameterization, ravel } from '../model/parameterization';

export interface Props {
  // x: SpringValue<number>;
  // y?: SpringValue<number>;
  t: SpringValue<number>;
  parameterization: Parameterization;
  children?: ReactNode;
}

const Move: FC<Props> = ({ t, parameterization, children }) => (
  <animated.g
    // transform={x.to(x => `translate(${x} ${x})`)}
    transform={t.to(ravel(parameterization))}
  >
    {children}
  </animated.g>
);

export default Move;
