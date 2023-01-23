import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import NotFoundPage from "PageNotFound";
import { Home, Register, Login, ForgetPassword } from "pages";
import Layout from "components/Layout";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";

const routes: TRoute[] = [
  {
    path: "/",
    component: <Home />,
    layout: <Layout />,
  },
  {
    path: "/home",
    component: <Home />,
    layout: <Layout />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "/forget-password",
    component: <ForgetPassword />,
  },
  {
    path: "*",
    component: <NotFoundPage />,
    layout: <Layout />,
  },
];

const router = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          {routes.map((item) => (
            <Route element={item?.layout} key={item.path}>
              <Route
                path={item.path}
                element={item.component}
                errorElement={<Home />}
              />
            </Route>
          ))}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default router;
