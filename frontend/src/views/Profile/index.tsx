import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { deleteUser } from "../../store/user/actions";

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingOut = () => {
    dispatch(deleteUser());
    navigate("/home");
  };

  return (
    <div>
      <h2>Profile page</h2>

      <Button variant="outlined" color="error" onClick={handleSingOut}>
        Sing Out
      </Button>
    </div>
  );
};
