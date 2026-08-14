import {createBrowserRouter,createHashRouter, createRoutesFromElements, Route} from "react-router-dom"
import { Dashboard, Login } from "../components"

const router=createHashRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
    )
)
export default router