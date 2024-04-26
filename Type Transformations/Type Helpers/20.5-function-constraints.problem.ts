import { Equal, Expect } from "../../helpers/type-utils";

type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

const sum = (a: number, b: number) => a + b;
type Sum = typeof sum;

type SumarParmsAndReturn = GetParametersAndReturnType<Sum>

const paramsAndreturn: SumarParmsAndReturn = {
  params: [1, 2],
  returnValue: 3,
}


type tests = [
  Expect<
    Equal<
      GetParametersAndReturnType<() => string>,
      { params: []; returnValue: string }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(s: string) => void>,
      { params: [string]; returnValue: void }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(n: number, b: boolean) => number>,
      { params: [number, boolean]; returnValue: number }
    >
  >,
];
