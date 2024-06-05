import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import ManageBeneficiary from "./Pages/ManageBeneficiary";
import Home from "./Pages/Home";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/manage-beneficiary",
    element: <ManageBeneficiary />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={rounter} />
    </Provider>
  );
}

export default App;
