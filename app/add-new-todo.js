"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div className=" mt-5 m-auto text-center">
      <input className="border-4 border-black rounded-lg w-96 left-24"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mx-5"
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
}
