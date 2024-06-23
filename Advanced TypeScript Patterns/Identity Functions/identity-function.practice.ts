type FieldsAndFormatters <TField extends string>= {
  fields: {
    name: TField,
  }[],
  formatters: Record<TField, () => string>
}

const makeFieldsAndFormatters = <T extends string>(t: FieldsAndFormatters<T>) => t;

const fieldsAndFormatters = makeFieldsAndFormatters({
  fields: [{
    name: 'age'
  },
  {
    name: 'gender',
  },
],
  formatters: {
    's': () => {return ''},
    'age': () => {return ''},
    'gender': () => {return 'as'}
  }
})