import {Equal,Expect} from '../../helpers/type-utils';

export class BuilderTuple<TList extends any[] = []>{
  public list: TList;

  constructor(){
    this.list = [] as any;
  }

  push<TNum extends number>(number: TNum): BuilderTuple<[...TList, TNum]>{
    this.list.push(number)

    return this as any;
  }

  unshift<TNum extends number>(number: TNum): BuilderTuple<[TNum, ...TList]>{
    this.list.push(number)

    return this as any;
  }
}

const builderBeforePush = new BuilderTuple();
const listBeforePush = builderBeforePush.list;

const builderAfterPush = builderBeforePush.push(1).push(2).push(3);
const listAfterPush = builderAfterPush.list;

type test = [
  Expect<Equal<typeof builderBeforePush,BuilderTuple<[]>>>,
  Expect<Equal<typeof listBeforePush,[]>>,
  Expect<Equal<typeof builderAfterPush,BuilderTuple<[1,2,3]>>>,
  Expect<Equal<typeof listAfterPush,[1,2,3]>>,
];