"use client";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import React from "react";
import { showDeleteModalAtom } from "./jotai";
import { HOVER_EFFECTS } from "@/lib/constants";

const DeleteModal = () => {
  const [showDeleteModal, setShowDeleteModal] = useAtom(showDeleteModalAtom);
  return (
    <div
      className={cn(
        "absolute left-0 top-0 bg-[#D9D9D980] h-screen w-screen flex items-center justify-center",
        showDeleteModal ? "" : "hidden"
      )}
    >
      <div className="size-[37.5rem] border-[0.313rem] border-color1 rounded-[1.5rem] bg-color4 p-8">
        <p className="font-medium text-2xl text-color3">
          Please be aware that once you delete a character you can not take it
          back.
        </p>

        <div className="flex flex-col mt-[3.75rem]">
          <label className="text-color1 font-medium text-2xl">
            Type the full name of the character below:
          </label>
          <input
            type="text"
            className="bg-color2 border border-color1 rounded-lg p-3"
          />
        </div>
        <div className="flex flex-col mt-10">
          <label className="text-color1 font-medium text-2xl">
            Type DELETE THE CHARACTER below:
          </label>
          <input
            type="text"
            className="bg-color2 border border-color1 rounded-lg p-3"
          />
        </div>
        <div className="flex flex-col space-y-3 mt-[3.75rem] items-center">
          <button className={cn(" shadow3 bg-color3 text-white w-1/2 py-3 text-xl rounded-lg", HOVER_EFFECTS)}>
            CONFIRM
          </button>
          <button
            onClick={() => setShowDeleteModal((prev) => !prev)}
            className={cn(" border-[0.188rem] border-color3  text-color3 w-1/2 py-3 text-xl rounded-lg", HOVER_EFFECTS)}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
