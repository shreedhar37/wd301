import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import NotFound from "./pages/Notfound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
    errorElement: <Navigate to="/notfound" />
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
    ],

  },
  {
    path: "/notfound",
    element: <NotFound />
  },


]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;