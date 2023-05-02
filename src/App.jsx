import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Classification from "./pages/classification";
import Home from "./pages/home/Home";
import Layout from "./pages/layout";

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/classification",
    element: (
      <Layout>
        <Classification />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
];
const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
