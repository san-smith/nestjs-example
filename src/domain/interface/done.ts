import { IVerifyOptions } from 'passport-http-bearer'

export type Done<T> = (
  error?: typeof Error,
  payload?: T,
  options?: IVerifyOptions | string,
) => void
