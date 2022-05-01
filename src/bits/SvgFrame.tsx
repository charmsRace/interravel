import { FC, ReactNode } from 'react';
import { createViewBox, Dimensions } from '../model/dimensions';

export interface Props {
  includeXmlns?: boolean;
  dimensions: Dimensions;
  children?: ReactNode;
}

const xmlns = 'http://www.w3.org/2000/svg';

const SvgFrame: FC<Props> = ({
  includeXmlns = false,
  dimensions,
  children,
}) => (
  <svg
    {...(includeXmlns ? { xmlns } : {})}
    {...dimensions}
    viewBox={createViewBox(dimensions)}
  >
    {children}
  </svg>
);

export default SvgFrame;
