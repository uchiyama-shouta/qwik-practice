import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import TaskCounter from "components/Task/TaskCounter";
import TaskForm from "components/Task/TaskForm";
import TaskList from "components/Task/TaskList";
import type { State } from "context/task";
import { TaskContext } from "context/task";

export default component$(() => {
  const state = useStore<State>({
    tasks: [],
  });
  useContextProvider(TaskContext, state);
  return (
    <div>
      <TaskCounter />
      <TaskForm />
      <TaskList />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik City",
};
