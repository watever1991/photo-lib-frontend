import {
  LightModeOutlined,
  DarkModeOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "store/features/theme/themeSlice";
import {
  AppBar,
  IconButton,
  Toolbar,
  useTheme,
  Box,
  Typography,
} from "@mui/material";
import { logout } from "store/features/user/userSlice";
import { useGetProfileQuery } from "generated/graphql";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { data, loading } = useGetProfileQuery();

  console.log("dataaaaa", data);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: "black",
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
        <Box>
          <Typography sx={{ display: "inline-block" }}>
            {loading && "loading..."}
            {data && data.me?.username}
          </Typography>
          <IconButton onClick={handleLogout}>
            <ExitToAppOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
