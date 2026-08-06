import Home from "../components/Home/Home";
import Details from "../components/Details/Details";
import Favourites from "../components/Favourites/Favourites";
import NavBar from "../components/NavBar/NavBar";
import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
}

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>}/>
      <Route path="details/:id" element={<Details />} />
      <Route path="favourites" element={<Favourites />} />
    </Route>,
  ),
);

export default router;
