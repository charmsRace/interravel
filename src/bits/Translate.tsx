import { FC, ReactNode } from 'react';
import { createTranslate } from '../model/coordinate';

export interface Props {
  x?: number;
  y?: number;
  children?: ReactNode;
}

const Translate: FC<Props> = ({ x = 0, y = 0, children }) => (
  <g transform={createTranslate({ x, y })}>{children}</g>
);

export default Translate;
