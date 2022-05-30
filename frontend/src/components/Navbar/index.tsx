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
              <Button color="inherit" variant="outlined">
                <Link to={`/profile/${user?.id}`}>Profile</Link>
              </Button>
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
      <Button color="inherit" variant="outlined">
        <Link to="/auth/login">Login</Link>
      </Button>

      <Button color="inherit" variant="outlined">
        <Link to="/auth/singup">Sing Up</Link>
      </Button>
    </div>
  );
};
