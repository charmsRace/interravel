export interface Dimensions {
  width: number;
  height: number;
}

export const createDimensions = (
  width: number,
  height = width,
): Dimensions => ({
  width,
  height,
});

export const createViewBox = ({ width, height }: Dimensions) =>
  `0 0 ${width} ${height}`;
