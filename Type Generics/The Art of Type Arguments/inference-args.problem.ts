const myFunc2 = <T extends { input: string }>(arg: T) => {
  return arg
}

const pep = myFunc2({ input: 'string' });

//@ts-expect-error
pep.asd = 'asdasd';

const myFunc = <T extends string>(arg: { input: T }) => {
  return arg;
}

const pep2 = myFunc({ input: 'asds' });

//@ts-expect-error
pep2.input = 'asdasd'

const returnsValueInAnArrayConstraint = <T1 extends string>(t: T1) => {
  return [t];
}

const result = returnsValueInAnArrayConstraint('abc');

//@ts-expect-error
result.push('asd')

const returnsValueInAnArray = <T1>(t: T1) => {
  return [t];
}

const result2 = returnsValueInAnArray('abc');

result2.push('asd')