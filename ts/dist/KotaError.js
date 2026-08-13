"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KotaError = void 0;
class KotaError extends Error {
    isKotaError = true;
    sdk = 'Kota';
    code;
    ctx;
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.KotaError = KotaError;
//# sourceMappingURL=KotaError.js.map