import React from "react";
import Step0 from "./steps/step0";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import { useAtomValue } from "jotai";
import { stepsAtom } from "./jotai";
import Step4 from "./steps/step4";

const NewCharacterSteps = () => {
  const step = useAtomValue(stepsAtom);

  switch (step) {
    case 0:
      return <Step0 />;
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;

    default:
      return <Step0 />;
  }
};

export default NewCharacterSteps;
