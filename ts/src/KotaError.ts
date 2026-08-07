
import { Context } from './Context'


class KotaError extends Error {

  isKotaError = true

  sdk = 'Kota'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  KotaError
}

