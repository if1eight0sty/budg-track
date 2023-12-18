import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/home/home"));
const Layout = lazy(() => import("./layout/layout"));
const Register = lazy(() => import("./pages/auth/register"));
const Login = lazy(() => import("./pages/auth/login"));
const Loader = lazy(() => import("./components/loader"));
function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            {/*   <Route path="add-budget" element={<AddBudget />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
