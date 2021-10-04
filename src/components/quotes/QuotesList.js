// import React, { useState, useEffect } from 'react';
// import { getQuoteById, getAllQuotes } from '../../modules/QuoteProvider';
// import { QuoteCard } from './QuoteCard';

// export const QuotesList = () => {
//     const [quotes, setQuotes] = useState([]);

//     const getQuotes = () => {
//         return getAllQuotes().then(quotesFromAPI => {
//             setQuotes(quotesFromAPI)
//         });
//     };

//     useEffect(() => {
//         getQuotes();
//     }, []);

//     return(
//         <div className="quotes_section">
//             {quotes.map(quote => {
         
//             return <QuoteCard key={quote.text} quote={quote} />}
//                 )}
//         </div>
//     );
//     }
