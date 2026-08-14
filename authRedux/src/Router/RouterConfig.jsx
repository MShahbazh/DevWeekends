import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import { Dashboard, Login } from "../components"

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
    )
)
export default router