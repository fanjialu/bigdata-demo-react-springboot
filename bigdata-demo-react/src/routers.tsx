import App from "./page/App";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { FirstChart } from "./page/Chart";
import Dashboard from "./page/Dashboard";


const GetRoutes = () => {
    const routes = useRoutes(
        [
            {
                path: '/', element: <App />, children: [
                    { index: true, element: <Dashboard /> },
                    {
                        // path: '/app', children: [
                        //     { path: 'home', element: <Home /> },
                        //     { path: 'finds', element: <FindPage /> },
                        //     { path: 'test', element: <Test /> },
                        //     { path: 'profile', element: <Profile /> },
                        //     { path: 'cart', element: <Cart /> },
                        //     { path: 'store', element: <Store /> },
                        // ]
                        path: '/chart', children: [
                            { path: '/chart/my_first_chart', element: <FirstChart /> },
                        ]
                    },
                ]
            },
        ]
    );
    return routes;
}

const InitRoutes = () => {
    return (
        <BrowserRouter>
            <GetRoutes />
        </BrowserRouter>
    )
}

export default InitRoutes;
