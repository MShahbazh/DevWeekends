import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Router/RouterConfig";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./Context/Context";

createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <RouterProvider router={router}>

        </RouterProvider>
    </ContextProvider>
);
