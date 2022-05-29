import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.scss";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="navbar">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo List
            </Typography>

            <div className="authBtns">
              <Button color="inherit" variant="outlined">
                <Link to="/auth/login">Login</Link>
              </Button>

              <Button color="inherit" variant="outlined">
                <Link to="/auth/singup">Sing Up</Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};
