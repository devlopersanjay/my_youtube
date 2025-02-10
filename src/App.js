import { Provider } from "react-redux";
import "./App.css";
import BodyContainer from "./Component/BodyContainer";
import Navbar from "./Component/Navbar";
import store from "./Utils/Store";
import {
  RouterProvider,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
import MainContainer from "./Component/MainContainer";
import Watch from "./Component/Watch";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <BodyContainer />,
      children: [
        {
          index: true,
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <Watch />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
