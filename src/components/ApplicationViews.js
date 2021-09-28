import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard } from "./customer/CustomerCard"
import { EmployeeCard } from "./employee/EmployeeCard"
import { LocationCard } from "./location/LocationCard"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"

export const ApplicationViews = ( {isAdmin} ) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>

            {/* Render the animal list when http://localhost:3000/customers */}
            <Route path="/customers">
              <CustomerList />
            </Route>

            {/* Render the animal list when http://localhost:3000/employees */}
            <Route path="/employees">
              <EmployeeList />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
            <Route path="/locations">
              <LocationList />
            </Route>
        </>
    )
}