import { Equal, Expect } from "../../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana = GetAppleOrBanana<Fruit>

// T está actuando como iterable, como un generico, de esta forma podemos hacer lo que esta en 5
// type AppleOrBanana = Fruit extends infer T
//   ? T extends "apple" | "banana"
//   ? T
//   : never
//   : never

// esto no funciona por que al no ser genérico compara todos los valores y orange no esta incluido en ellos
// type AppleOrBanana = Fruit extends "apple" | 'banana' ? 'apple' | 'banana' : never
type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
