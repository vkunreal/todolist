import { Registration } from "../../components/Registration";

interface IAuthProps {
  type: string;
}

export const Authtorization: React.FC<IAuthProps> = ({ type }) => {
  return (
    <div>
      <Registration type={type} />
    </div>
  );
};
