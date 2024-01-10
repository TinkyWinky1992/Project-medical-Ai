import ErrorPage from "../Pages/RoutError";
import Menu from "../Pages/Menu";
import RenderChatbox from "../Pages/ChatBoxWithAi";
import AppointmentPage from "../Pages/Appoinment";
import AboutPage from "../Pages/About";
import LocationPage from "../Pages/UserSettingsPages/location";
import RenderLoginOrRegister from "../Pages/login-register";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import App from "../App";
import ProfilePage from "../Pages/UserSettingsPages/Profile"
 
const router = createBrowserRouter([
  {
    path: routes.LOGIN_REGISTER,
    element: <RenderLoginOrRegister/>,
    errorElement: <ErrorPage />,
  },

  {
    path: routes.PROFILE,
    element: <ProfilePage/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: routes.LOCATION,
        element: <LocationPage/>,
      },
      
    ]
  },


  {
    path: routes.MAIN,
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: routes.MENU,
        element: <Menu/>,
        
        
      },

      {
        path: routes.TALK_WITH_ROBERTO,
        element: <RenderChatbox />,
        
      },

      {
        path: routes.YOUR_APPOINMENT,
        element: <AppointmentPage />,
        
      },

      {

        path: routes.ABOUT,
        element: <AboutPage />,

      },


    ]
  },
]);

export default router;
