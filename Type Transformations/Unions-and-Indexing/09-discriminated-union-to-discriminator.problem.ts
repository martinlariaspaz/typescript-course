import { Equal, Expect } from "../../helpers/type-utils";

/*
Your job is to grab the type of click or focus or keyDown from the discriminated union so that the following test passes:
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

type EventType = Event['type'];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
