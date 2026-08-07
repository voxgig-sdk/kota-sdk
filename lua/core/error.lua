-- Kota SDK error

local KotaError = {}
KotaError.__index = KotaError


function KotaError.new(code, msg, ctx)
  local self = setmetatable({}, KotaError)
  self.is_sdk_error = true
  self.sdk = "Kota"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function KotaError:error()
  return self.msg
end


function KotaError:__tostring()
  return self.msg
end


return KotaError
