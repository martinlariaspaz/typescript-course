import { Equal, Expect } from "../../helpers/type-utils";

/*
For this exercise, your job is to extract all of the events from the Event type whose type isn't "keydown":
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

type NonKeyDownEvents = Exclude<Event, { type: 'keydown' }>;

type tests = [
  Expect<
    Equal<
      NonKeyDownEvents,
      | { type: "click"; event: MouseEvent }
      | { type: "focus"; event: FocusEvent }
    >
  >,
];
