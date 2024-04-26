import { expect, it } from "vitest";
import { Equal, Expect } from "../../helpers/type-utils";

type YouSayGoodbyeISayHelloReturnType<T extends 'hello' | 'goodbye'> = T extends 'goodbye' ? 'hello' : 'goodbye'

function youSayGoodbyeISayHello<T extends 'hello' | 'goodbye'>(greeting: T): YouSayGoodbyeISayHelloReturnType<T> {
  return (greeting === 'goodbye' ? 'hello' : 'goodbye') as YouSayGoodbyeISayHelloReturnType<T>
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
