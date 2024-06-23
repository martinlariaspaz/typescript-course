import { Equal, Expect } from "../../helpers/type-utils";

/**
 * This time, let's solve this with function overloads!
 */
function returnWhatIPassIn(t: 1): 1;
function returnWhatIPassIn(t: "matt"): "matt";
function returnWhatIPassIn(t:'tincho'): 'pepe';

function returnWhatIPassIn(t: 1 | 'matt' | 'tincho') {
  if(t ==='tincho') return 'pepe';

  return t;
}

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");
const tincho = returnWhatIPassIn('tincho');

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>,Expect<Equal<typeof tincho,'pepe'>>];


type Suma<T extends number | string> = (T:T) => T;

const sumaString:Suma<string> = (value) => {
return value;
}

const sumaNumber:Suma<number> = (value) =>{
  return value;
}

const suma = (value:string | number) => {

  return value;
}

const result = suma('hola mundo');

const result1 = sumaNumber(5);
const result2 = sumaString('hola')