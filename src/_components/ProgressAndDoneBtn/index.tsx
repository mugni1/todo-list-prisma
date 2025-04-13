"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function ProgressAndDone() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  return (
    <div className="flex items-center gap-3 w-full md:w-5/12 mx-auto justify-between mt-5">
      <button
        onClick={() => router.push("/")}
        className={` ${
          !status ? "bg-amber-500 shadow-sm text-white" : null
        } w-1/2 border border-amber-500 py-1 text-amber-500 rounded font-bold active:text-white shadow-md active:shadow-sm transition-all ease-in-out cursor-pointer active:bg-amber-500`}
      >
        PROGRESS
      </button>
      <button
        onClick={() => router.push("/?status=done")}
        className={`${
          status == "done" ? "bg-green-500 shadow-sm text-white" : null
        }  w-1/2 border border-green-500 py-1 text-green-500 rounded font-bold active:text-white shadow-md active:shadow-sm transition-all ease-in-out cursor-pointer active:bg-green-500`}
      >
        DONE
      </button>
    </div>
  );
}
