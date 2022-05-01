export type Ravelled<T> = (t: number) => T;

export const compose =
  <X, Y>(base: Ravelled<X>, fn: (x: X) => Y): Ravelled<Y> =>
  t =>
    fn(base(t));
