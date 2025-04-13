"use client";
import { todoCreate } from "@/_lib/action";
import React, { useActionState, useEffect } from "react";
import SubmitBtn from "./SubmitBtn";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormCreateTodo() {
  const [state, formAction] = useActionState(todoCreate, null);

  useEffect(() => {
    if (state?.status == "warning") {
      toast.warning("Name Not Valid");
    }
    if (state?.status == "failed") {
      toast.error("Please try again later");
    }
    if (state?.status == "success") {
      toast.success("Saving Success");
    }
  }, [state]);
  useEffect(() => {
    toast.info("Welcome My Friends");
  }, []);
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
