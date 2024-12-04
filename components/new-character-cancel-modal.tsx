"use client"
import { cn } from "@/lib/utils";
import { useAtom, useSetAtom } from "jotai";
import React from "react";
import {
  showMultiOrNewCharacterAtom,
  showNewCharacterCancelModalAtom,
} from "./jotai";
import { HOVER_EFFECTS } from "@/lib/constants";

const NewCharacterCancelModal = () => {
  const [showNewCharacterCancelModal, setShowNewCharacterCancelModal] = useAtom(
    showNewCharacterCancelModalAtom
  );
  const setShowMultiOrNewCharacter = useSetAtom(showMultiOrNewCharacterAtom);
  return (
    <div
      className={cn(
        "absolute left-0 top-0 bg-[#D9D9D980] h-screen w-screen flex items-center justify-center",
        showNewCharacterCancelModal ? "" : "hidden"
      )}
    >
      <div className="size-[37.5rem] border-[0.313rem] border-color1 rounded-[1.5rem] bg-color4 p-8 flex flex-col items-center justify-center ">
        <p className="font-medium text-2xl text-center text-color3">
          ARE YOU SURE YOU WANT TO CANCEL YOUR PROGRESS?
        </p>

        <div className="flex flex-col space-y-3 mt-[3.75rem] w-full items-center ">
          <button
            onClick={() => {
              setShowMultiOrNewCharacter((prev) => !prev);
              setShowNewCharacterCancelModal((prev) => !prev);
            }}
            className={cn(" shadow3 bg-color3 w-1/2 text-white  py-3 text-xl rounded-lg", HOVER_EFFECTS)}
          >
            CONFIRM
          </button>
          <button
            onClick={() => setShowNewCharacterCancelModal((prev) => !prev)}
            className={cn("border-[0.188rem] border-color3 w-1/2 text-color3 py-3 text-xl rounded-lg", HOVER_EFFECTS)}
          >
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCharacterCancelModal;
