import React, {useState} from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { Redirect, } from "react-router"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = ( {isAdmin} ) => {

const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

const setAuthUser = (user) => {
	sessionStorage.setItem("kennel_customer", JSON.stringify(user))
	setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
}
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin}/>
            </Route>

            {/* // Our shiny new route. */}
            <Route path="/animals/create">
              <AnimalForm />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
            {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/animals/:animalId(\d+)">
              {/* "animalId is used on line " */}
              <AnimalDetail />
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

            <Route path="/login">
	            <Login setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/register">
              <Register setAuthUser={setAuthUser}/>
            </Route>
        </>
    )
}