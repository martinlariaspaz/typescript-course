import { Equal, Expect } from "../../helpers/type-utils";
import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

// type ExtractPathParams<T> = T extends UserPath
//   ? T extends `/users/:${infer TUser}`
//   ? Record<TUser, string>
//   : never
//   : T extends UserOrganisationPath
//   ? T extends `${string}/users/:${infer TUser}/organisations/:${infer TOrg}`
//   ? Record<TUser | TOrg, string>
//   : never
//   : never;

type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, '/'>[number]as K extends `:${infer P}` ? P : never]: string
}

type Example = ExtractPathParams<UserPath>

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
