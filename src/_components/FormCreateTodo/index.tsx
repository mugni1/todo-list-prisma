"use client";
import { todoCreate } from "@/_lib/action";
import React, { useActionState } from "react";
import SubmitBtn from "./SubmitBtn";

export default function FormCreateTodo() {
  const [state, formAction] = useActionState(todoCreate, null);
  return (
    <>
      <div className=" w-full md:w-5/12 mx-auto  relative shadow-md">
        <form action={formAction} className="flex overflow-hidden">
          <input
            type="text"
            className=" w-full py-1 ps-3 border border-slate-400"
            placeholder="Create Your Todo"
            name="name"
          />
          <SubmitBtn />
        </form>
      </div>
      {state?.Error?.name && (
        <i className="w-full md:w-5/12 mx-auto block text-sm md:text-base text-red-500 mt-1">
          {state?.Error.name}
        </i>
      )}
    </>
  );
}
