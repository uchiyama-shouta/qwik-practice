import { component$, mutable, useContext } from "@builder.io/qwik";
import TaskItem from "components/Task/TaskItem";
import { TaskContext } from "context/task";

const TaskList = component$(() => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="mb-7">
      <p className="mb-1 text-3xl">Todoの一覧</p>
      <ul className="flex flex-col gap-3">
        {tasks.length === 0 ? (
          <p>タスクが存在しません</p>
        ) : (
          tasks.map((task) => {
            const { isComplete, ...restProps } = task;
            return (
              <TaskItem
                key={task.id}
                isComplete={mutable(isComplete)}
                {...restProps}
              />
            );
          })
        )}
      </ul>
    </div>
  );
});

export default TaskList;
