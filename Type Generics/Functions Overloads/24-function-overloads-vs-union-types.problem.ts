import { expect, it } from "vitest";
import { Equal, Expect } from "../../helpers/type-utils";

/*
 Now, when you pass it an object, 
  it's going to return you an object.
  When you just pass it function, 
  it's going to return you just a string. 
  This wasn't the exercise.
  You should think carefully, 
  because function overloads are at their best when you have a different return type based on something that you pass in.
  If you just have the same return type, 
  no matter what happens,
  it's always going to return a string,
  then you should probably be using a union to express these parameters instead.
*/

// function runGenerator(generator: () => string): string;
// function runGenerator(generator: { run: () => string }): string;
// WORK AS WELL
function runGenerator(generator: { run: () => string } | (() => string)) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator({
    run: () => "hello",
  });

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator(() => "hello");

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});
