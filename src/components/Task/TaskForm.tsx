import { $, component$, useContext, useStore } from "@builder.io/qwik";
import Add from "components/Icon/Add";
import { TaskContext } from "context/task";

const TaskForm = component$(() => {
  const state = useContext(TaskContext);
  const input = useStore<{ text: string }>({
    text: "",
  });

  const handleSubmit = $(() => {
    state.tasks = [
      ...state.tasks,
      {
        id: state.tasks.length + 1,
        text: input.text,
        isComplete: false,
      },
    ];
    input.text = "";
  });

  const handleChange = $((e: Event) => {
    input.text = (e.target as HTMLInputElement).value;
  });
  return (
    <div className="mb-7">
      <p className="mb-1 text-3xl">Todoの追加</p>
      <form preventDefault:submit onSubmit$={handleSubmit}>
        <div className="flex">
          <input
            className="h-10 w-64 rounded-md border border-black pl-2 text-2xl"
            type="text"
            name="text"
            preventDefault:change
            onChange$={handleChange}
          />
          <button
            className="ml-2 h-10 rounded-md border border-black px-2"
            type="submit"
          >
            <Add />
          </button>
        </div>
      </form>
    </div>
  );
});

export default TaskForm;
