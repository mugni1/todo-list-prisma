import React from "react";
import { useFormStatus } from "react-dom";
import { FaSave } from "react-icons/fa";
import { LuLoaderCircle } from "react-icons/lu";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-2/12 top-0 bottom-0 right-0 py-1 absolute font-semibold bg-foreground text-background text-center"
    >
      {pending ? (
        <LuLoaderCircle size={20} className="animate-spin mx-auto" />
      ) : (
        <FaSave size={20} className=" mx-auto" />
      )}
    </button>
  );
}
