import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { IDeleteProjectDialogProps } from "./interfaces";

export const DeleteProjectDialog: React.FC<IDeleteProjectDialogProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>DELETE PROJECT</DialogTitle>

      <DialogContent>
        <Button variant="outlined" color="error" onClick={onDelete}>
          Delete
        </Button>
      </DialogContent>
    </Dialog>
  );
};
