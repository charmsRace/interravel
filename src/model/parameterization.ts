import { Coordinate, createTranslate } from './coordinate';
import { compose, Ravelled } from './ravelled';

export type Parameterization = Ravelled<Coordinate>;

export const linearlyParameterize =
  ({ x, y }: Coordinate): Parameterization =>
  t => ({
    x: t * x,
    y: t * y,
  });

export const ravelTranslate2 =
  (coordinate: Coordinate): Ravelled<string> =>
  t =>
    createTranslate(linearlyParameterize(coordinate)(t));

export const ravelTranslate = (coordinate: Coordinate) =>
  compose(linearlyParameterize(coordinate), createTranslate);

export const ravel =
  (p: Parameterization): Ravelled<string> =>
  t =>
    createTranslate(p(t));
