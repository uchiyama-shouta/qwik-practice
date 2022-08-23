import { component$, useContext } from "@builder.io/qwik";
import { TaskContext } from "context/task";

const TaskCounter = component$(() => {
  const state = useContext(TaskContext);

  return (
    <div className="mb-10 border-b border-black pb-1 text-4xl">
      TODO: {state.tasks.length}件
    </div>
  );
});
export default TaskCounter;
