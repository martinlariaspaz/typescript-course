const arrayIfIsMultiple = <TType extends 'multiple' | 'single'>(type:TType, value: TType extends 'multiple' ? Array<string>  : string) =>{
  return value;
}

const myValue = arrayIfIsMultiple('multiple',[]);

const myValue2 = arrayIfIsMultiple('single','');
