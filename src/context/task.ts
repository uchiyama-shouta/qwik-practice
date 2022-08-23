import { createContext } from "@builder.io/qwik";
import type { Task } from "types/task";

export type State = {
  tasks: Task[];
};

export const TaskContext = createContext<State>("task-context");
