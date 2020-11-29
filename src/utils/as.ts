const as = <A, B extends A>(provide: A, useClass: B) => ({
  provide,
  useClass,
})

export default as
