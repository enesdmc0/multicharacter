import React, { useState } from "react";
import DefaultStep from "../default-step";
import { cn } from "@/lib/utils";
import { HOVER_EFFECTS, step_2_buttons } from "@/lib/constants";
import Subtitle from "../subtitle";

const Step2 = () => {
  const [selected, setSelected] = useState<string>("neck");

  const SectionRender = () => {
    switch (selected) {
      case "neck":
        return (
          <div className="space-y-2">
            <Subtitle title="Neck Type" />
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
              {["Length", "Thickness"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "top":
        return (
          <div className="space-y-2">
            <Subtitle title="Neck Type" />
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
      case "torso":
        return (
          <div className="space-y-2">
            <Subtitle title="Torso Type" />
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
              {["Length", "Thickness"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "arms":
        return (
          <div className="space-y-2">
            <Subtitle title="Torso Type" />
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
              {["Length", "Thickness"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "vest":
        return (
          <div className="space-y-2">
            <Subtitle title="Vest Type" />
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
      case "jacket":
        return (
          <div className="space-y-2">
            <Subtitle title="Jacket Type" />
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
      case "bag":
        return (
          <div className="space-y-2">
            <Subtitle title="Bag Type" />
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
      case "hands":
        return (
          <div className="space-y-2">
            <Subtitle title="Hands" />
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

       
      default:
        break;
    }
  };

  return (
    <DefaultStep>
      <div className="grid grid-cols-4 gap-2">
        {step_2_buttons.map((button, index) => (
          <button
            onClick={() => setSelected(button)}
            key={index}
            className={cn(
              "bg-[#7F9392] rounded-lg font-medium text-lg py-4 uppercase text-white",
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

export default Step2;
