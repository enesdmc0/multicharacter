"use client";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { showNewCharacterModalAtom } from "./jotai";
import Image from "next/image";
import { HOVER_EFFECTS } from "@/lib/constants";

const NewCharacterModalModal = () => {
  const [showNewCharacterModal, setShowNewCharacterModal] = useAtom(
    showNewCharacterModalAtom
  );
  const [gender, setGender] = useState("");
  return (
    <div
      className={cn(
        "absolute left-0 top-0 bg-[#D9D9D980] h-screen w-screen flex items-center justify-center",
        showNewCharacterModal ? "" : "hidden"
      )}
    >
      <div className="h-[40rem] w-[49.375rem] border-[0.313rem] flex border-color1 rounded-[1.5rem] bg-color4 p-8 space-x-8">
        <div className="flex-1 flex justify-between flex-col">
          <div className="flex flex-col">
            <label className="text-color1 font-medium text-2xl">
              Gender
            </label>
            <div className="flex space-x-3">
              {["male", "female"].map((a) => (
                <button
                  key={a}
                  onClick={() => setGender(a)}
                  className={cn(
                    "text-white rounded-lg py-3 flex-1",
                    gender === a ? "bg-color1 shadow3" : "bg-color2",
                    HOVER_EFFECTS
                  )}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-color1 font-medium text-2xl">Name</label>
            <input
              type="text"
              className="bg-color2 border border-color1 text-color1 rounded-lg p-3 text-2xl"
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-color1 font-medium text-2xl">
              Surname
            </label>
            <input
              type="text"
              className="bg-color2 border border-color1 text-color1 rounded-lg p-3 text-2xl"
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-color1 font-medium text-2xl">
              Birthday
            </label>
            <input
              type="text"
              className="bg-color2 border border-color1 text-color1 rounded-lg p-3 text-2xl"
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-color1 font-medium text-2xl">
              Nationality
            </label>
            <select className="bg-color2 border border-color1 text-color1 rounded-lg p-3 text-2xl">
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label className="text-color1 font-medium text-2xl">
              TEBEX TRANSACTION ID
            </label>
            <input
              type="text"
              className="bg-color2 border border-color1 text-color1 text-2xl rounded-lg p-3  "
            />
          </div>
        </div>
        <div className="flex-1 flex justify-between flex-col">
          <div className="gradient1 rounded-lg relative mt-8">
           <div className="relative w-[23.125rem] h-[10.938rem] ">
           <Image
              src="/girl.png"
              alt=""
              fill
              className="object-cover "
            />
           </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-color1 font-medium text-2xl">Mother</p>
              <div className="w-[9.375rem] h-[9.375rem] rounded-lg bg-color1"></div>
              <p className="text-color1 font-medium text-xl mt-2">
                Height: 180 cm
              </p>
            </div>
            <div>
              <p className="text-color1 font-medium text-2xl">Father</p>
              <div className="w-[9.375rem] h-[9.375rem] rounded-lg bg-color1"></div>
              <p className="text-color1 font-medium text-xl mt-2">
                Weight: 60 kg
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 ">
            <button
              className={cn(
                " shadow3 bg-color3 text-white py-[0.625rem] text-xl rounded-lg",
                HOVER_EFFECTS
              )}
            >
              CONFIRM
            </button>
            <button
              onClick={() => setShowNewCharacterModal((prev) => !prev)}
              className={cn(
                " border-[0.188rem] border-color3  text-color3 py-[0.625rem] text-xl rounded-lg",
                HOVER_EFFECTS
              )}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCharacterModalModal;
