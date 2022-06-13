import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, List, ListItem } from "@mui/material";
import { EditProfileDialog } from "../../components/EditProfileDialog";
import { deleteUser } from "../../store/user/actions";
import {
  selectProfile,
  selectSelectedUser,
} from "../../store/profile/selectors";
import "./styles.scss";
import {
  setSelectedUserDB,
  updateProfileDB,
} from "../../store/profile/actions";
import { selectAuth } from "../../store/user/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const user = useSelector(selectSelectedUser);
  const profile = useSelector(selectProfile);
  const isAuth = useSelector(selectAuth);

  const [image, setImage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    dispatch(updateProfileDB(params.id));
    dispatch(setSelectedUserDB(params.id));
  }, []);

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

        {isAuth && (
          <div className="profile-rightside">
            <Button
              variant="outlined"
              color="success"
              onClick={handleOpenDialog}
            >
              Edit
            </Button>

            <Button variant="outlined" color="error" onClick={handleSingOut}>
              Sing Out
            </Button>
          </div>
        )}

        <EditProfileDialog
          isOpen={openDialog}
          handleCloseDialog={handleCloseDialog}
        />
      </main>
    </div>
  );
};
