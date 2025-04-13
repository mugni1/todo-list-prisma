import React from "react";
import CardTodo from "./CardTodo";
import type { Todo } from "@/generated/prisma";

export default function ListTodo({ todos }: { todos: Todo[] }) {
  if (!todos) {
    return (
      <div className=" w-full md:w-5/12 mx-auto  my-5 relative flex flex-col gap-3">
        <h2 className=" text-lg md:text-xl text-red-500 text-center p-3 shadow-md border border-slate-400 rounded-md font-semibold">
          Todo Not Found
        </h2>
      </div>
    );
  }
  if (todos.length < 1) {
    return (
      <div className=" w-full md:w-5/12 mx-auto  my-5 relative flex flex-col gap-3">
        <h2 className=" text-lg md:text-xl text-red-500 text-center p-3 shadow-md border border-slate-400 rounded-md font-semibold">
          Not Have Todo
        </h2>
      </div>
    );
  }
  return (
    <div className=" w-full md:w-5/12 mx-auto  my-5 relative flex flex-col gap-3">
      {todos?.map((todo: Todo, index: number) => (
        <CardTodo
          key={`${index}`}
          title={todo.name}
          status={todo.status}
          id={todo.id}
        />
      ))}
    </div>
  );
}
