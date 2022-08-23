import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <main className="mx-auto w-4/5 pt-16">
        <Slot />
      </main>
    </div>
  );
});
