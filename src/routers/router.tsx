import {
    createBrowserRouter,
} from "react-router";
import App from "../App";
// import ButtonSubmit from "../components/buttons/ButtonSubmit";

export const router = createBrowserRouter([
    { index: true, Component: App },
    {
        path: "/",
        element: <App />,
    },
]);


