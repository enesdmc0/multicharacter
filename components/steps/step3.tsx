import React, { useState } from "react";
import DefaultStep from "../default-step";
import { cn } from "@/lib/utils";
import { HOVER_EFFECTS, step_3_buttons } from "@/lib/constants";
import Subtitle from "../subtitle";

const Step3 = () => {
  const [selected, setSelected] = useState<string>("bottom");

  const SectionRender = () => {
    switch (selected) {
      case "bottom":
        return (
          <div className="space-y-2">
            <Subtitle title="Bottom Type" />
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
      case "legs":
        return (
          <div className="space-y-2">
            <Subtitle title="Legs Type" />
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
              {["Muscle Tone", "Body Composition"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "hips":
        return (
          <div className="space-y-2">
            <Subtitle title="Hips Type" />
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
              {["Width", "Tone"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "shoes":
        return (
          <div className="space-y-2">
            <Subtitle title="Shoe Type" />
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

       

       
      default:
        break;
    }
  };

  return (
    <DefaultStep>
      <div className="grid grid-cols-4 gap-2">
        {step_3_buttons.map((button, index) => (
          <button
            onClick={() => setSelected(button)}
            key={index}
            className={cn(
              "bg-[#A6C1D6] rounded-lg font-medium text-lg py-4 uppercase text-white",
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

export default Step3;
