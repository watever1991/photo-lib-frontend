import {
  LightModeOutlined,
  DarkModeOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "store/theme/themeSlice";
import {
  AppBar,
  IconButton,
  Toolbar,
  useTheme,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { logout } from "store/user/userSlice";
import { useGetProfileQuery } from "generated/graphql";
import { RootState } from "store";
import { Link } from "react-router-dom";

const styles = {
  loginButton: {
    linkStyle: "none",
    color: "white",
    "&:hover": {
      color: "hotpink",
    },
    "&>p": {
      textTransform: "initial",
    },
  },
};

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const token = useSelector((state: RootState) => state.user.token);
  const { data, loading } = useGetProfileQuery();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return (
    <AppBar
      sx={{
        position: "static",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "25px" }} />
          )}
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {token ? (
            <>
              <Typography>
                {loading && "loading..."}
                {data && data.me?.username}
              </Typography>
              <IconButton onClick={handleLogout}>
                <ExitToAppOutlined sx={{ fontSize: "25px" }} />
              </IconButton>
              <IconButton>
                <SettingsOutlined sx={{ fontSize: "25px" }} />
              </IconButton>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={styles.loginButton}>
                <Typography>Login or Register</Typography>
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
