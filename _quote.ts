import { _quote as _fetch_quote, quote_params_type } from '@ctx-core/iex'
export async function _quote({ ticker }:quote_params_type) {
  return _fetch_quote({ ticker })
}
