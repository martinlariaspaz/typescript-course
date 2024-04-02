type NotUndefinedOrNull<T> = Exclude<T, null | undefined>
export type Maybe<T extends Exclude<T, null | undefined>> = T | null | undefined;

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];
