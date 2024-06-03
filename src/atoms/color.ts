import { atom } from "jotai";

export const activeColorAtom = atom<null | { name: string; hex: string }>(null);

export const readColorAtom = atom((get) => get(activeColorAtom));
export const setColorAtom = atom(null, (get, set, payload) => {
  console.log(payload);
  const country = payload.country;
  const activeColor = get(activeColorAtom);
  set(country, { ...country, fill: activeColor.hex });
});
