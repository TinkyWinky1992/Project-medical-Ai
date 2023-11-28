import Menu from "../Pages/Menu";
import RenderChatbox from "../Pages/ChatBoxWithAi";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
            <Menu/>
        </div>
      ),
    },
    {
      path: "Talk-With-Roberto",
      element:(
        <div>
            <RenderChatbox/>
        </div>
      ), 
    },
  ]);

  export default router;
  