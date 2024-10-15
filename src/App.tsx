import LoginPage from "./pages/login/LoginPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage.tsx";
import ProtectedRoutes from "./router/ProtectedRoutes.tsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<LoginPage/>} path={"/login"} />
            <Route element={<ProtectedRoutes/>}>
                <Route element={<MainPage/>} path={"/dashboard"}/>
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//
// function AppRouter() {
//     const router = createBrowserRouter([
//         {
//             path: "/",
//             id: 'root',
//             children: [
//                 {
//                     path: "login",
//                     element: <LoginPage />,
//                 },
//                 {
//                     path: "dashboard",
//                     element: <MainPage />,
//                     loader: getCoordinates,
//                 },
//             ],
//         },
//     ]);
//
//     return <RouterProvider router={router} />;
// }
//
// export default AppRouter;
