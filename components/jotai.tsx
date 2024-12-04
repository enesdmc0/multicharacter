"use client";

import { atom } from "jotai";

export const showDeleteModalAtom = atom<boolean>(false);
export const showNewCharacterModalAtom = atom<boolean>(false);
export const showNewCharacterCancelModalAtom = atom<boolean>(false);
export const showMultiOrNewCharacterAtom = atom<boolean>(false);
export const stepsAtom = atom<number>(0);
