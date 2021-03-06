export interface IProjectProps {
  name: string;
  description: string;
  last_update: number;
  id: number;
  onDelete: (id: number) => void;
}
