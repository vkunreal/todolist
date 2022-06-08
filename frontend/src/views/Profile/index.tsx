import { Avatar, Button, List, ListItem } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { EditProfile } from "../../components/EditProfile";
import { deleteUser } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { selectProfile } from "../../store/profile/selectors";
import "./styles.scss";

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const profile = useSelector(selectProfile);

  const [image, setImage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const getTime = () => new Date(Number(profile?.created_at)).toDateString();

  const handleSingOut = () => {
    dispatch(deleteUser());
    navigate("/home");
  };

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <div className="profile">
      <header className="profile-header">
        <p>PROFILE</p>
      </header>

      <main className="profile-main">
        <div className="profile-leftside">
          <Avatar src={image} alt="Avatar" sx={{ width: 340, height: 340 }} />

          <List className="info-list">
            <ListItem>Name: {user?.name}</ListItem>
            <ListItem>Email: {user?.email}</ListItem>
            <ListItem>Created at: {getTime()}</ListItem>
          </List>
        </div>

        <div className="profile-rightside">
          <Button variant="outlined" color="success" onClick={handleOpenDialog}>
            Edit
          </Button>

          <Button variant="outlined" color="error" onClick={handleSingOut}>
            Sing Out
          </Button>
        </div>

        <EditProfile
          isOpen={openDialog}
          handleCloseDialog={handleCloseDialog}
        />
      </main>
    </div>
  );
};
