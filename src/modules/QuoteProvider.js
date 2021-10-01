const remoteURL = " https://type.fit/api/quotes"

export const getQuoteById = (quoteId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/quotes/${quoteId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getAllQuotes = () => {
    return fetch (remoteURL)
    .then(res => res.json())
  }