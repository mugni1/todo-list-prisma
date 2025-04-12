import React from "react";
import CardTodo from "./CardTodo";
import type { Todo } from "@/generated/prisma";

export default function ListTodo({ todos }: { todos: Todo[] }) {
  return (
    <div className=" w-full md:w-5/12 mx-auto  my-5 relative flex flex-col gap-3">
      {todos.map((todo: Todo, index: number) => (
        <CardTodo key={index} title={todo.name} />
      ))}
    </div>
  );
}
