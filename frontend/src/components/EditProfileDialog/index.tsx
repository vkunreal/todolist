import { useEffect, useState } from "react";
import { IEditProfileProps } from "./interfaces";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../store/profile/actions";
import { selectUser } from "../../store/user/selectors";
import "./styles.scss";

export const EditProfileDialog: React.FC<IEditProfileProps> = ({
  isOpen,
  handleCloseDialog,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
  }, []);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleChangeProfile = async () => {
    if (!name.trim()) setError("Name is empty");
    else if (!email.trim()) setError("Email is empty");

    dispatch(changeProfile(name, email));
    handleCloseDialog();
  };

  return (
    <Dialog open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle>EDIT PROFILE</DialogTitle>

      <DialogContent>
        <DialogContentText className="dialogContent">
          <TextField
            placeholder="Name"
            value={name}
            onChange={handleChangeName}
          />

          <TextField
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />

          <h4 className="error">{error}</h4>

          <div className="editProfileBtns">
            <Button variant="outlined" onClick={handleChangeProfile}>
              Edit
            </Button>

            <Button
              variant="outlined"
              color="error"
              onClick={handleCloseDialog}
            >
              Close
            </Button>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
