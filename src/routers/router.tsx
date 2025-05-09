import {
    createBrowserRouter,
} from "react-router";
// import App from "../App";
// import MainLayout from "../layouts/MainLayout-cancel";
import DesktopMainLayout from "../layouts/DesktopMainLayout";
import LoadMainLayout from "../layouts/LoadMainLayout";
// import ButtonSubmit from "../components/buttons/ButtonSubmit";

export const router = createBrowserRouter([
    { index: true, Component: LoadMainLayout },

]);


