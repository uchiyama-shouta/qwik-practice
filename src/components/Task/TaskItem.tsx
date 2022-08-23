import { $, component$, useContext } from "@builder.io/qwik";
import Trash from "components/Icon/Trash";
import { TaskContext } from "context/task";
import type { Task } from "types/task";

type Props = Task;

const TaskItem = component$((props: Props) => {
  const state = useContext(TaskContext);

  const handleToggleIsComplete = $((id: Task["id"]) => {
    state.tasks = state.tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task,
    );
  });

  const handleDeleteTask = $((id: Task["id"]) => {
    state.tasks = state.tasks.filter((task) => task.id !== id);
  });

  return (
    <li className="flex w-96 items-center justify-between pb-1 text-xl">
      <p>{props.text}</p>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="ml-2 h-7 w-7"
          checked={props.isComplete}
          onChange$={() => handleToggleIsComplete(props.id)}
        />

        <button
          className="ml-2 h-7 rounded-md border border-red-500 px-2"
          onClick$={() => handleDeleteTask(props.id)}
        >
          <Trash />
        </button>
      </div>
    </li>
  );
});

export default TaskItem;
