import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  id: string;
  email: string;
  username: string;
}

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes?
 */

type Record<K extends keyof any, T> = {
  [P in K]: T;
};


type GetKeyOfT<K> = keyof K;
// type MutuallyExclusive<T> = {
//   [K in keyof T]: Record<K, T[K]>
// }[keyof T]

type MutuallyExclusive<T> = {
  [K in keyof T]: {
    [P in K]: T[K];
  }
}[keyof T]

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type tests = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
        id: string;
      }
      | {
        email: string;
      }
      | {
        username: string;
      }
    >
  >,
];
