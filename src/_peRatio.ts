import { _peRatio as _fetch_peRatio } from '@ctx-core/iex'
export async function _peRatio({ ticker }:_peRatio_params_I) {
	return _fetch_peRatio({ ticker })
}
export interface _peRatio_params_I {
	ticker:string
}
