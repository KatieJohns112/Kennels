import React from "react"
import "./quote.css"

export const QuoteCard = ({quote}) => {
    return (
        <>
        <h3>Quotes</h3>
        <p>quote: {quote?.text}</p>
        <p>author: {quote?.author}</p>
        </>
    );
}