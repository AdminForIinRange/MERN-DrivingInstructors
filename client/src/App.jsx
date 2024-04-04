import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/AboutUs/Services.jsx";
import LoginSignup from "./pages/Login/LoginSignup.jsx";
import About from "./pages/About/About.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Account from "./pages/Account/Account.jsx";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Services" element={<Services />} />
      <Route path="Login/Signup" element={<LoginSignup />} />
      <Route path="About" element={<About />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Account" element={<Account />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
