"use client";
import { showMultiOrNewCharacterAtom } from "@/components/jotai";
import Multicharacter from "@/components/multicharacter";
import NewCharacterSteps from "@/components/new-character-steps";
import { useAtomValue } from "jotai";
import React from "react";

const Home = () => {
  const showMultiOrNewCharacter = useAtomValue(showMultiOrNewCharacterAtom);

  switch (showMultiOrNewCharacter) {
    case false:
      return <Multicharacter />;
    case true:
      return <NewCharacterSteps />;
  }
};

export default Home;
