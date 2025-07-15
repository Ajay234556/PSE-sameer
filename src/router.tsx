import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/LoginPage";
import HomeLayout from "@/layouts/HomeLayout";
import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";
import RootLayout from "@/layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <HomeLayout />,
                children: [
                    {
                        path: "",
                        element: <DashboardPage />,
                    },
                ],
            },
            {
                path: "auth",
                element: <UnauthorizedLayout />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                ],
            },
        ],
    },
]);