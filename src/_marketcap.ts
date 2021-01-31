import { _marketcap as _fetch_marketcap, quote_params_type } from '@ctx-core/iex'
export async function _marketcap({ ticker }:quote_params_type) {
  return _fetch_marketcap({ ticker })
}
