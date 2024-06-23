class RoutesArray<TList extends any[] = []> {
  public list: TList;

  constructor(){
    this.list = [] as any;
  }

  pushRoute<TRoute extends`/${string}`>(route: TRoute):RoutesArray<[...TList,TRoute]>{
    this.list.push(route);

    return this as any;
  }
}

const routesArray = new RoutesArray();
const routesArrayBeforePush = routesArray.pushRoute('/logout').pushRoute('/login');
const routesArrayAfterPush = routesArrayBeforePush.list;
