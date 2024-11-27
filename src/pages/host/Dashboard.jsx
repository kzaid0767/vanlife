import { Outlet } from "react-router-dom"
import Income from "./Income"
import Reviews from "./Reviews"

export default function Host(){

    return(
        <>
            <h1>host</h1>
            <Outlet/>
        </>
    )
}
