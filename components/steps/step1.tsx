import React, { useState } from "react";
import DefaultStep from "../default-step";
import { cn } from "@/lib/utils";
import { HOVER_EFFECTS, step_1_buttons } from "@/lib/constants";
import Subtitle from "../subtitle";

const Step1 = () => {
  const [selected, setSelected] = useState<string>("hair color");

  const SectionRender = () => {
    switch (selected) {
      case "hair color":
        return (
          <div className="space-y-2">
            <Subtitle title="Hair Color" />
            <div className="grid grid-cols-12 gap-2">
              {Array(192)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
          </div>
        );
      case "hair style":
        return (
          <div className="space-y-2">
            <Subtitle title="Hair Style" />
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
      case "eyes":
        return (
          <div className="space-y-2 h-full">
            <Subtitle title="Eye Color" />
            <div className="grid grid-cols-12 gap-2">
              {Array(96)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <Subtitle title="Eye Shape" />
            <div className="grid grid-cols-6 gap-2">
              {Array(30)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="grid grid-cols-3 gap-2">
              {["Proximity", "Openness", "Position"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400 rounded-full  h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "eyebrowns":
        return (
          <div className="space-y-2">
            <Subtitle title="Eye Brow Color" />
            <div className="grid grid-cols-12 gap-2">
              {Array(96)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <Subtitle title="Eyebrow Shape" />
            <div className="grid grid-cols-6 gap-2">
              {Array(30)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="grid grid-cols-3 gap-x-2">
              {["Proximity", "Position"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "nose":
        return (
          <div className="space-y-2">
            <Subtitle title="Nose Type" />
            <div className="grid grid-cols-6 gap-2">
              {Array(42)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[5.25] bg-white cursor-pointer "
                  ></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="grid grid-cols-3 gap-x-2">
              {["Length", "Position"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "lips":
        return (
          <div className="space-y-2">
            <Subtitle title="Lip Color" />
            <div className="grid grid-cols-12 gap-2">
              {Array(96)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <Subtitle title="Lip shape" />
            <div className="grid grid-cols-6 gap-2">
              {Array(30)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="grid grid-cols-3 gap-x-2">
              {["Thickness", "Width"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "blush":
        return (
          <div className="space-y-2">
            <Subtitle title="Blush Color" />
            <div className="grid grid-cols-12 gap-2">
              {Array(96)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <Subtitle title="Blush Type" />
            <div className="grid grid-cols-6 gap-2">
              {Array(30)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="grid grid-cols-3 gap-x-2">
              {["Saturation", "Size"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "make-up":
        return (
          <div className="space-y-2">
            <Subtitle title="Make-Up" />
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
      case "ears":
        return (
          <div className="space-y-2">
            <Subtitle title="Ear Type" />
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
              {["Length", "Position"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "beard":
        return (
          <div className="space-y-2">
            <Subtitle title="Beard Color" />
            <div className="grid grid-cols-12 gap-2">
              {Array(96)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <Subtitle title="Beard Style" />
            <div className="grid grid-cols-6 gap-2">
              {Array(30)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-9 bg-white cursor-pointer "></div>
                ))}
            </div>
            <div className="h-3" />
            <div className="grid grid-cols-3 gap-x-2">
              {["Thickness", "Length"].map((x, i) => (
                <div key={i}>
                  <Subtitle style="text-xl mb-1" title={x} />
                  <div className="bg-red-400  rounded-full h-5" />
                </div>
              ))}
            </div>
          </div>
        );
      case "ageing":
        return (
          <div className="space-y-12 mt-10">
            {[
              "hair",
              "forehead",
              "eyes",
              "cheeks",
              "beard",
              "mouth",
              "chin",
            ].map((x, i) => (
              <div key={i}>
                <Subtitle style="text-2xl capitalize mb-1" title={x} />
                <div className="bg-red-400  rounded-full h-5" />
              </div>
            ))}
          </div>
        );
      case "piercing":
        return (
          <div className="space-y-2">
            <Subtitle title="Piercing" />
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
        {step_1_buttons.map((button, index) => (
          <button
            onClick={() => setSelected(button)}
            key={index}
            className={cn(
              "bg-color5 rounded-lg font-medium text-lg py-4 uppercase text-white",
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

export default Step1;
