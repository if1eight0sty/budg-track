import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Loader = lazy(() => import("./components/loader"));
const Layout = lazy(() => import("./layout/layout"));
const Home = lazy(() => import("./pages/home/home"));
const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
