import { Equal, Expect } from "../../helpers/type-utils";

type Data = { data: "hello" }

type Data2 = Data['data']

// type GetDataValue<T> = T extends { data: any } ? T['data'] : never;
type GetDataValue<T> = T extends { data: infer TData } ? TData : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>,
];
