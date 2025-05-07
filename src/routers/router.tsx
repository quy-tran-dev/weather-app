import {
    createBrowserRouter,
} from "react-router";
// import App from "../App";
import MainLayout from "../layouts/MainLayout";
// import ButtonSubmit from "../components/buttons/ButtonSubmit";

export const router = createBrowserRouter([
    { index: true, Component: MainLayout },

]);


