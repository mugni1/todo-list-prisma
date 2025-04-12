import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function CardTodo() {
  return (
    <div className="p-3 border border-slate-400 rounded shadow-md flex justify-between items-center">
      <span className="w-auto line-clamp-1 ">
        Title Todo asda aaskdjdaisjdaaaa aaa aaa ais aisjd aisjdiasjd iajsidasjd
      </span>
      <div className="h-full flex gap-2 items-center justify-center w-fit">
        <button className=" p-1 border rounded text-green-400">
          <FaCheck size={12} />
        </button>
        <button className=" p-1 border rounded text-red-400">
          <FaTrash size={12} />
        </button>
        <button className=" p-1 border rounded text-amber-400">
          <FaPencil size={12} />
        </button>
      </div>
    </div>
  );
}
