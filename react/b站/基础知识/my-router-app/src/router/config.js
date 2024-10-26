// reactrouter配置

import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page11 from "../components/Page11";
import Page12 from "../components/Page12";
export const routesArr = [
    {
        path: "/page1",
        component: Page1,
        children: [
            {
                path: "/page1/page11",
                component: Page11
            },
            {
                path: "/page1/page12",
                component: Page12
            }
        ]
    },
    {
        path: "/page2",
        component: Page2
    },
    {
        path: "/page3",
        component: Page3
    }
]