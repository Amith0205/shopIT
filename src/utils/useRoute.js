import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Components/AppLayout";
import Error from "../Components/Error";
import Body from "../Components/Body";
import Cart from "../Components/Cart/Cart";
 
const useRoute=()=>{
    const router=createBrowserRouter([
        {
            path:'/',
            element: <AppLayout />,
            errorElement: <Error />,
            children:[
                {
                    path:'/',
                    element:<Body />
                },
                {
                    path:'/cart',
                    element:<Cart />
                }
            ]
            
        }
    ]);
    return router;
}
export default useRoute;