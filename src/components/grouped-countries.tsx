import { useAtomValue } from "jotai";
import {
  CountryType,
  DEFAULT_COUNTRY_FILL,
  readCountriesAtom,
} from "../atoms/countries";

export function GroupedCountries() {
  const countries = useAtomValue(readCountriesAtom);
  const grouped = Object.values(
    countries.reduce(
      (acc, country) => {
        const fill = country.fill;
        if (fill !== DEFAULT_COUNTRY_FILL) {
          if (!acc[fill]) {
            acc[fill] = [] satisfies Array<CountryType>;
          }
          acc[fill].push(country);
        }

        return acc;
      },
      {} as Record<string, Array<CountryType>>,
    ),
  ) satisfies Array<Array<CountryType>>;

  return (
    <div className="space-y-4">
      {grouped.map((group, index) => (
        <div key={index}>
          <h2 className="font-bold">{group[0].fill}</h2>
          <ul>
            {group.map((country) => (
              <li key={country.key}>{country.properties.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
