import { Equal, Expect } from "../../helpers/type-utils";

type Route =
  | {
    route: "/";
    search: {
      page: string;
      perPage: string;
    };
  }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };


// type RoutesObject = {
//   [K in Route['route']]: Extract<Route, { route: K }>['search']
// };


/*
* Here, R represents the individual Route. The lesson here
* is that the thing we're iterating DOESN'T have to be a
* string | number | symbol, as long as the thing we cast it to
* it.
*/
type RoutesObject = {
  [K in Route as K['route']]: K['search']
}

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
];
