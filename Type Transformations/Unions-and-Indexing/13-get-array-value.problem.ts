import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

type Fruits = typeof fruits;
type FruitsValues = Fruits[number];

type AppleOrBanana = Exclude<FruitsValues, 'orange'>;
type Fruit = FruitsValues;

type AppleOrBanana2 = typeof fruits[0 | 1];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<AppleOrBanana2, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
