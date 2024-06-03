import { PrimitiveAtom, atom } from "jotai";
import countryShapes from "../data/countries.json";
import { activeColorAtom } from "./color";
export type CountryType = (typeof countryShapes.features)[number] & {
  fill: string;
  key: string;
};

export const DEFAULT_COUNTRY_FILL = "#9980FA";
export const countriesAtom = atom(
  countryShapes.features.map<CountryType>((shape) => {
    return {
      ...shape,
      key: shape.properties.subunit,
      fill: DEFAULT_COUNTRY_FILL,
    };
  }),
);

export const readCountriesAtom = atom((get) => get(countriesAtom));

export const setActiveColorAtom = atom(
  null,
  (get, set, payload: PrimitiveAtom<CountryType>) => {
    const activeColor = get(activeColorAtom);
    const country = get(payload);
    if (!activeColor) throw new Error("No active color");
    if (country.fill !== activeColor.hex) {
      set(payload, { ...country, fill: activeColor.hex });
    }
  },
);
