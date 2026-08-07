package core

type KotaError struct {
	IsKotaError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewKotaError(code string, msg string, ctx *Context) *KotaError {
	return &KotaError{
		IsKotaError: true,
		Sdk:              "Kota",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *KotaError) Error() string {
	return e.Msg
}
