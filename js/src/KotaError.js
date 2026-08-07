

class KotaError extends Error {

  isKotaError = true

  sdk = 'Kota'

  constructor(code, msg, ctx) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

module.exports = {
  KotaError
}

