import React, { useState } from "react";
import DefaultStep from "../default-step";
import { cn } from "@/lib/utils";
import { HOVER_EFFECTS, step_4_buttons } from "@/lib/constants";
import Subtitle from "../subtitle";

const Step4 = () => {
  const [selected, setSelected] = useState<string>("glasses");

  const SectionRender = () => {
    switch (selected) {
      case "glasses":
        return (
          <div className="space-y-2">
            <Subtitle title="Glasses Type" />
            <div className="grid grid-cols-6 gap-2">
              {Array(42)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[5.25rem] bg-white cursor-pointer "
                  ></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="flex flex-col gap-2">
              {["Tint", "Saturation"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "hat":
        return (
          <div className="space-y-2">
            <Subtitle title="Hat Type" />
            <div className="grid grid-cols-6 gap-2">
              {Array(42)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[5.25rem] bg-white cursor-pointer "
                  ></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="flex flex-col gap-2">
              {["Tint", "Saturation"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "mask":
        return (
          <div className="space-y-2">
            <Subtitle title="Mask" />
            <div className="grid grid-cols-4  gap-2">
              {Array(16)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[10.625rem] bg-white cursor-pointer "
                  ></div>
                ))}
            </div>
          </div>
        );
      case "watch":
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Subtitle title="Watch Type" />
              <div className="flex items-center gap-3">
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  +
                </button>
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  -
                </button>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {Array(42)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[5.25rem] bg-white cursor-pointer "
                  ></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="flex flex-col gap-2">
              {["Metal", "Shine"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "jewellery":
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Subtitle title="Jewellery Type" />
              <div className="flex items-center gap-3">
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  +
                </button>
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  -
                </button>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {Array(42)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[5.25rem] bg-white cursor-pointer "
                  ></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="flex flex-col gap-2">
              {["Metal", "Shine"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "tattoos":
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Subtitle title="Tattoo Type" />
              <div className="flex items-center gap-3">
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  +
                </button>
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  -
                </button>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {Array(42)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[5.25rem] bg-white cursor-pointer "
                  ></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="grid grid-cols-3 gap-x-10">
              {["Aged"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
              <div className="col-span-2">
                <select className="bg-color2 border border-color1 text-color1 h-full w-full rounded-lg px-3">
                  <option value="test">test</option>
                </select>
              </div>
            </div>
          </div>
        );
      case "prosthetics":
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Subtitle title="Prosthetics" />
              <div className="flex items-center gap-3">
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  +
                </button>
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  -
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4  gap-2">
              {Array(16)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[10.625rem] bg-white cursor-pointer "
                  ></div>
                ))}
            </div>
          </div>
        );
      case "moles":
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Subtitle title="Mole" />
              <div className="flex items-center gap-3">
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  +
                </button>
                <button
                  className={cn(
                    "size-8 bg-color1 flex items-center justify-center text-white text-2xl",
                    HOVER_EFFECTS
                  )}
                >
                  -
                </button>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {Array(42)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[5.25rem] bg-white cursor-pointer "
                  ></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="grid grid-cols-3 gap-x-2">
              {["Size", "Position X", "Position Y"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <DefaultStep>
      <div className="grid grid-cols-4 gap-2">
        {step_4_buttons.map((button, index) => (
          <button
            onClick={() => setSelected(button)}
            key={index}
            className={cn(
              "bg-color6 rounded-lg font-medium text-lg py-4 uppercase text-white",
              HOVER_EFFECTS,
              selected === button ? "shadow6" : ""
            )}
          >
            {button}
          </button>
        ))}
      </div>
      <SectionRender />
    </DefaultStep>
  );
};

export default Step4;
