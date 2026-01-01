function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;

type AddFnResult<T> = T extends (...args: any[]) => infer R ? R : never;

type AddFnResultExample = AddFnResult<AddFn>;
type AddFnResultExample2 = ReturnType<AddFn>; // build in utility type
