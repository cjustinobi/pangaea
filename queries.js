import gql from "graphql-tag"

export const GET_PRODUCTS = gql`
  query ($currency : Currency){
    products  {
      id
      title
      image_url
      price(currency: $currency)

  }
 }`

export const GET_CURRENCIES = gql`
  query {
    currency
 }`