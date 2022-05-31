import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectAuth, selectUser } from "../../store/user/selectors";
import "./styles.scss";

export const Navbar: React.FC = () => {
  const isAuth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="navbar">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={handleLogoClick}
            >
              TODO LIST
            </Typography>

            {isAuth ? (
              <Link to={`/profile/${user?.id}`}>
                <Button color="inherit" variant="outlined">
                  Profile
                </Button>
              </Link>
            ) : (
              <AuthBtns />
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

const AuthBtns: React.FC = () => {
  return (
    <div className="authBtns">
      <Link to="/auth/login">
        <Button color="inherit" variant="outlined">
          Login
        </Button>
      </Link>

      <Link to="/auth/singup">
        <Button color="inherit" variant="outlined">
          Sing Up
        </Button>
      </Link>
    </div>
  );
};
