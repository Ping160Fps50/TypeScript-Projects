type Operations = {
  readonly add: (a: number, b: number) => number;
  readonly subtrack: (a: number, b: number) => number;
};

type Results<T> = {
  -readonly [Key in keyof T]?: number;
};

let operationMath: Operations = {
  add: (a, b) => a + b,
  subtrack: (a, b) => a - b,
};

let resultsMath: Results<Operations> = {
  add: operationMath.add(1, 2),
  subtrack: operationMath.subtrack(1, 2),
};
