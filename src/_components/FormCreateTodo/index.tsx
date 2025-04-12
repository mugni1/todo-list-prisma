import React from "react";

export default function FormCreateTodo() {
  return (
    <div className=" w-full md:w-5/12 mx-auto  my-5 relative shadow-md">
      <form action="" className="flex overflow-hidden">
        <input
          type="text"
          className="w-12/12 py-1 ps-3 border border-slate-400"
          placeholder="Create Your Todo"
        />
        <button className="w-2/12 top-0 bottom-0 right-0 py-1 absolute font-semibold bg-foreground text-background">
          Save
        </button>
      </form>
    </div>
  );
}
