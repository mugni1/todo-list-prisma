"use client";

import { todoDelete, todoSetDone } from "@/_lib/action";
import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardTodo({
  title,
  id,
  status,
}: {
  title: string;
  id: number;
  status: string;
}) {
  async function handleDone(id: number) {
    const res = await todoSetDone(id);
    if (res.status) {
      toast.success("Success to set done");
    } else {
      toast.error("Failed to set done");
    }
  }
  async function handleDelete(id: number) {
    const res = await todoDelete(id);
    if (res.status) {
      toast.success("Delete Success");
    } else {
      toast.error("Delete Failed");
    }
  }
  return (
    <div className="p-3 border border-slate-400 rounded shadow-md flex justify-between items-center">
      <span className="w-auto line-clamp-1 ">{title}</span>
      <div className="h-full flex gap-2 items-center justify-center w-fit">
        {status == "progress" && (
          <button
            onClick={() => handleDone(id)}
            className=" p-1 border rounded text-green-400"
          >
            <FaCheck size={12} />
          </button>
        )}
        <button
          onClick={() => handleDelete(id)}
          className=" p-1 border rounded text-red-400"
        >
          <FaTrash size={12} />
        </button>
      </div>
    </div>
  );
}
