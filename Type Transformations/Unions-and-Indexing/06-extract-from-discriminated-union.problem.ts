import { Equal, Expect } from "../helpers/type-utils";

/*
Your goal for this challenge is to extract the "click" type into a new type called ClickEvent.
*/

export type Event =
  | {
    type: "click";
    event: MouseEvent;
  }
  | {
    type: "focus";
    event: FocusEvent;
  }
  | {
    type: "keydown";
    event: KeyboardEvent;
  };

type ClickEvent = Extract<Event, { type: "click" }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
