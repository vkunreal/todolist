import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { TodoCard } from "../../components/TodoCard";
import { setTodosDB } from "../../store/projects/actions";
import { selectTodos } from "../../store/projects/selectors";

export const ProjectPage: React.FC = () => {
  const todos = useSelector(selectTodos);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodosDB(params.project_id));
  }, []);

  return (
    <div>
      <h2>Project Page</h2>

      {todos.map((todo) => (
        <TodoCard
          name={todo.name}
          description={todo.description}
          key={todo.id}
        />
      ))}
    </div>
  );
};
