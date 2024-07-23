import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import About from "./About";
import Blog from "./Blog";
import Illustration from "./Illustration";
import Contact from "./Contact";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/blog/:id?", element: <Blog /> },
      { path: "/Illustration", element: <Illustration /> },
      { path: "/Contact", element: <Contact /> },
     
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
