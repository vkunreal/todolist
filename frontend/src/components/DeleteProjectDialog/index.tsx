import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { IDeleteProjectDialogProps } from "./interfaces";

export const DeleteProjectDialog: React.FC<IDeleteProjectDialogProps> = ({
  isOpen,
  onDelete,
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>DELETE PROJECT</DialogTitle>

      <DialogContent>
        <Button variant="outlined" color="error" onClick={onDelete}>
          Delete
        </Button>
      </DialogContent>
    </Dialog>
  );
};
