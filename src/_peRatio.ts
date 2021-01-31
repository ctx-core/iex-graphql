import { _peRatio as _fetch_peRatio } from '@ctx-core/iex'
export async function _peRatio({ ticker }) {
  return _fetch_peRatio({ ticker })
}
