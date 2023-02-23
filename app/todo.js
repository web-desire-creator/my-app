"use client";

import { useRouter } from "next/navigation";

async function update(id, isDone, refresh) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

async function deleteTodo(id, refresh) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}

export default function Todo({ todo }) {
  const router = useRouter();

  return (
    <main className="m-auto text-center mt-5">
      <input className="mr-5"
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-m mx-5"
      onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </main>
  );
}
