import { Equal, Expect } from "../../helpers/type-utils";

/*
Your challenge is to turn fakeDataDefaults into a type, then extract each of the object into its individual pieces:
*/

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDateDefaults = typeof fakeDataDefaults

export type StringType = FakeDateDefaults['String'];
export type IntType = FakeDateDefaults['Int'];
export type FloatType = FakeDateDefaults['Float'];
export type BooleanType = FakeDateDefaults['Boolean'];
export type IDType = FakeDateDefaults['ID'];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
