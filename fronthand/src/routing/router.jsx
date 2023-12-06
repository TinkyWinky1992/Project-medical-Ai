import ErrorPage from "../Pages/RoutError";
import Menu from "../Pages/Menu";
import RenderChatbox from "../Pages/ChatBoxWithAi";
import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter([
  {
    path: routes.MENU,
    element: <Menu />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.TALK_WITH_ROBERTO,
    element: <RenderChatbox />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
