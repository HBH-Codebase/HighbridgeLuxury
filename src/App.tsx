import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from "./Root"
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {path: '*', element: <Root />},
]);


function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
