import { Registration } from "../../components/Registration";
import { IAuthProps } from "./interfaces";

export const Authtorization: React.FC<IAuthProps> = ({ type }) => {
  return (
    <div>
      <Registration type={type} />
    </div>
  );
};
