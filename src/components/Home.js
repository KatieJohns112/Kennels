import React from "react";
import { PropsAndState } from './PropsAndStates'
// import { QuotesList } from "./quotes/QuotesList";


export const Home = ( {isAdmin} ) => (
    <>
    {/* terinary statement */}
        {isAdmin ?
        <p>You are an admin</p>
        :
        <p>You are NOT an admin</p>
        }
    {/* terinary statement */}

        <h2>Nashville Kennels</h2>
        <h2>Loving care when you're not there.</h2>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Katie"} day={"Tuesday"} />
        {/* <QuotesList/> */}
    </>
)


