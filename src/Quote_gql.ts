import type { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
//@formatter:off
export const Quote_gql:DocumentNode = gql`
	type Quote {
		symbol: String
		companyName: String
		calculationPrice: String
		open: Float
		openTime: Float
		close: Float
		closeTime: Float
		high: Float
		low: Float
		latestPrice: Float
		latestSource: String
		latestTime: String
		latestUpdate: Float
		latestVolume: Float
		iexRealtimePrice: Float
		iexRealtimeSize: Float
		iexLastUpdated: Float
		delayedPrice: Float
		delayedPriceTime: Float
		extendedPrice: Float
		extendedChange: Float
		extendedChangePercent: Float
		extendedPriceTime: Float
		previousClose: Float
		change: Float
		changePercent: Float
		iexMarketPercent: Float
		iexVolume: Float
		avgTotalVolume: Float
		iexBidPrice: Float
		iexBidSize: Float
		iexAskPrice: Float
		iexAskSize: Float
		marketCap: Float
		week52High: Float
		week52Low: Float
		ytdChange: Float
	}
`
//@formatter:on
export const resolvers = {}
export {
	Quote_gql as type__Quote
}
