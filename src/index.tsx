import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./styles/index.css";
import "./i18n/config";
import {ConfigProvider} from "antd";
import {Layout} from "@/component/layout";
const routes = createBrowserRouter([
    {
        path:'',
        element: <Layout />,
        children:[
            {
                path:'/',
                lazy: () => import("@/pages/home"),
            }
        ]
    }

]);
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: "#0F766E",
                controlOutlineWidth: 0, // input and button shadow
                // look at support menu and hold the pop-up tab
            },
        }}
    > <RouterProvider router={routes}></RouterProvider>
    </ConfigProvider>
);

