import React from "react";
import CardTodo from "./CardTodo";

export default function ListTodo() {
  return (
    <div className=" w-full md:w-5/12 mx-auto  my-5 relative flex flex-col gap-3">
      <CardTodo />
    </div>
  );
}
