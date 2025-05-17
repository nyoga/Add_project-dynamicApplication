import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredtask, setEnteredTask] = useState();

  const handelChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handelClick = () => {
    if (enteredtask.trim() === "") {
      return;
    }
    onAdd(enteredtask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handelChange}
        value={enteredtask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handelClick}
      >
        Add task
      </button>
    </div>
  );
}
