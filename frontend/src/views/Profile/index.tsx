import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, List, ListItem } from "@mui/material";
import { EditProfileDialog } from "../../components/EditProfileDialog";
import { deleteUser } from "../../store/user/actions";
import {
  selectAvatar,
  selectProfile,
  selectSelectedUser,
} from "../../store/profile/selectors";
import {
  setSelectedUserDB,
  updateAvatarDB,
  updateProfileDB,
} from "../../store/profile/actions";
import { selectAuth, selectUserId } from "../../store/user/selectors";
import "./styles.scss";

export const Profile = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const selectedUser = useSelector(selectSelectedUser);
  const userId = useSelector(selectUserId);
  const profile = useSelector(selectProfile);
  const isAuth = useSelector(selectAuth);
  const avatar = useSelector(selectAvatar);

  useEffect(() => {
    dispatch(updateProfileDB(params.profile_id));
    dispatch(setSelectedUserDB(params.profile_id));
    dispatch(updateAvatarDB());
  }, []);

  useEffect(() => {
    dispatch(updateAvatarDB());
  }, [selectedUser]);

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
          <Avatar
            src={avatar || ""}
            alt="Avatar"
            sx={{ width: 340, height: 340 }}
          />

          <List className="info-list">
            <ListItem>Name: {selectedUser?.name}</ListItem>
            <ListItem>Email: {selectedUser?.email}</ListItem>
            <ListItem>Created at: {getTime()}</ListItem>
          </List>
        </div>

        {isAuth && selectedUser?.id === userId && (
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
