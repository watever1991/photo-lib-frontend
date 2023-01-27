import {
  LightModeOutlined,
  DarkModeOutlined,
  Lock,
  ExitToApp,
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
import { useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "./core/Menu";
import images from "assets/images";

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
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const token = useSelector((state: RootState) => state.userSlice.token);
  const { data: profileData, loading: loadingProfile } = useGetProfileQuery();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  const menuList = [
    {
      id: "1",
      element: (
        <Link
          style={{
            textDecoration: "none",
            color: "White",
            display: "flex",
            alignItems: "center",
          }}
          to="/reset-password"
        >
          <Lock sx={{ fontSize: "24px" }} />
          <Button style={{ color: "White" }}>Reset Password</Button>
        </Link>
      ),
    },
    {
      id: "2",
      element: (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ExitToApp sx={{ fontSize: "24px" }} />
          <Button style={{ color: "White" }} onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      ),
    },
  ];

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
              <Box>
                {loadingProfile ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography>loading...</Typography>
                    <Box sx={{ marginLeft: "8px" }}>
                      <img
                        src={images.profile.avatarIcon}
                        style={{ height: "40px", borderRadius: "50%" }}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box
                    onClick={handleToggle}
                    ref={anchorRef}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <KeyboardArrowDownIcon />
                    <Typography>
                      {profileData && profileData.me?.username}
                    </Typography>
                    <Box sx={{ marginLeft: "8px" }}>
                      <img
                        src={images.profile.avatarIcon}
                        style={{ height: "40px", borderRadius: "50%" }}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
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
      <Menu
        anchorRef={anchorRef}
        open={open}
        setOpen={setOpen}
        list={menuList}
      />
    </AppBar>
  );
};

export default Navbar;
