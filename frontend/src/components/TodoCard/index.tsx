import { Button } from "@mui/material";
import "./styles.scss";

export const TodoCard: React.FC = () => {
  return (
    <div className="todoCard">
      <h1 className="todoCard-heading">Heading</h1>

      <p className="todoCard-description">
        Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque ut animi explicabo quisquam perferendis. Corporis eligendi
        pariatur illum alias atque delectus hic nemo veritatis aperiam, qui
        maiores molestias illo! Vero.
      </p>

      <Button color="error" variant="outlined">
        Delete
      </Button>
    </div>
  );
};
