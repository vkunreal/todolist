import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Registration } from "../../components/Registration";
import { selectAuth } from "../../store/user/selectors";
import { IAuthProps } from "./interfaces";

export const Authtorization: React.FC<IAuthProps> = ({ type }) => {
  return (
    <div>
      <Registration type={type} />
    </div>
  );
};
