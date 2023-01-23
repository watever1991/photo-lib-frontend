import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import NotFoundPage from "PageNotFound";
import { Dashboard, Home } from "pages";
import Layout from "components/Layout";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";

const routes: TRoute[] = [
  {
    path: "/",
    component: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    component: <Dashboard />,
  },
  {
    path: "/login",
    component: <Navigate to="/home" replace />,
  },
  {
    path: "/register",
    component: <Navigate to="/home" replace />,
  },
  {
    path: "*",
    component: <NotFoundPage />,
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
            <Route element={<Layout />} key={item.path}>
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
