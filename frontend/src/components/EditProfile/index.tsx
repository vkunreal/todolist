import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { IEditProfileProps } from "./interfaces";

export const EditProfile: React.FC<IEditProfileProps> = ({
  isOpen,
  handleCloseDialog,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle>EDIT PROFILE</DialogTitle>

      <DialogContent>
        <DialogContentText className="dialogContent">
          <TextField placeholder="Name" />

          <TextField placeholder="Email" />

          <div>
            <Button>Edit</Button>

            <Button onClick={handleCloseDialog}>Close</Button>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
