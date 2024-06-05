import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import ManageBeneficiary from "./Pages/ManageBeneficiary";
import Home from "./Pages/Home";
import { PersistGate } from "redux-persist/integration/react";

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
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={rounter} />
      </PersistGate>
    </Provider>
  );
}

export default App;
