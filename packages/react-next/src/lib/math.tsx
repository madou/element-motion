/**
 * @hidden
 */
export interface Dimensions {
  width: number;
  height: number;
}

/**
 * @hidden
 */
export function calculateHypotenuse({ width, height }: Dimensions) {
  const x2 = width ** 2;
  const y2 = height ** 2;

  const hypotenuse = Math.sqrt(x2 + y2);
  return Math.ceil(hypotenuse);
}

/**
 * @hidden
 */
export function percentageDifference(from: number, to: number) {
  return from / to;
}
