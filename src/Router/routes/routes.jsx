import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import Home from "../../pages/home/Home";
import Services from "../../pages/services/Services"
import Blogs from "../../pages/blog/Blogs"
import About from "../../pages/about/About"
import Contact from "../../pages/contact/Contact"

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
        ]
    }
]);

export default router;