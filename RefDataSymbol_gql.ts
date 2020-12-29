import type { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
export const RefDataSymbol_gql:DocumentNode = gql`
	type RefDataSymbol {
		symbol: String
		name: String
		date: String
		type: String
		iexId: String
		region: String
		currency: String
		isEnabled: Boolean
	}
`
export {
	RefDataSymbol_gql as type__RefDataSymbol
}
