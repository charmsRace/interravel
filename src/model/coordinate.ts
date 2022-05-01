export interface Coordinate {
  x: number;
  y: number;
}

export const createCoordinate = (x: number, y = x): Coordinate => ({ x, y });

export const createTranslate = ({ x, y }: Coordinate) => `translate(${x} ${y})`;
