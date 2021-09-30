import React from "react";
import { PropsAndState } from './PropsAndStates'

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
        <large>Loving care when you're not there.</large>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Katie"} day={"Tuesday"} />
    </>
)


