import { Equal, Expect } from "../../helpers/type-utils";


type Obj<T extends string> = {
  [key in T]: (arg: key) => any
}

export function makeEventHandlers<const T extends string>(obj: Obj<T>) {
  return obj;
}

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "click">>;
  },
  focus: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "focus">>;
  },
});
