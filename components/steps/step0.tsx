import React, { useState } from "react";
import DefaultStep from "../default-step";

const Step0 = () => {
  const [custom, setCustom] = useState<number>(0);

  const SectionRender = () => {
    switch (custom) {
      case 0:
        return (
          <div className="grid grid-cols-12 gap-2">
            {Array(96)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-9 bg-white "></div>
              ))}
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-4 gap-2">
            {Array(16)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-[5.25rem] bg-white "></div>
              ))}
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-4 gap-2">
            {Array(16)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-[5.25rem] bg-white "></div>
              ))}
          </div>
        );
      default:
        break;
    }
  };

  enum Custom {
    skintone = 0,
    jawline = 1,
    "cheek bones" = 2,
  }

  return (
    <DefaultStep>
      <div className="border h-[15rem] bg-color1 rounded-lg"></div>

      <div className="space-y-5 mt-7">
        {["skintone", "jawline", "cheek bones"].map((a, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[color1 text-2xl font-medium capitalize">
                {a}
              </p>
              <button
                onClick={() => setCustom(i)}
                className="text-color1 text-2xl font-medium underline hover:opacity-80 transition-all"
              >
                Custom
              </button>
            </div>
            <div className="h-10 bg-red-400 rounded-lg "></div>
          </div>
        ))}
      </div>

      <div className="mt-7 space-y-4">
        <p className="text-color1 font-medium text-2xl capitalize">
          custom {Custom[custom]}
        </p>

        <SectionRender />
      </div>
    </DefaultStep>
  );
};

export default Step0;
