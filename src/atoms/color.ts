import { atom } from "jotai";

export const activeColorAtom = atom<null | { name: string; hex: string }>(null);

export const readColorAtom = atom((get) => get(activeColorAtom));
