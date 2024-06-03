import { PrimitiveAtom, useAtom } from "jotai";
import { CountryType } from "../atoms/countries";
import { setActiveColorAtom } from "../atoms/countries";

type CountryProps = {
  countryAtom: PrimitiveAtom<CountryType>;
  pathGenerator: (shape: any) => string;
};
export function Country({ countryAtom, pathGenerator }: CountryProps) {
  const [country] = useAtom(countryAtom);
  const [, setColor] = useAtom(setActiveColorAtom);
  console.log(`Rendering ${country.properties.name}`);
  return (
    <path
      d={pathGenerator(country)}
      fill={country.fill}
      stroke="#fff"
      onClick={() => setColor(countryAtom)}
    >
      <title>{country.properties.name}</title>
    </path>
  );
}
