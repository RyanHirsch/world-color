import { useAtom } from "jotai";
import { activeColorAtom } from "../atoms/color";
import { useEffect } from "react";
import { DEFAULT_COUNTRY_FILL } from "../atoms/countries";

const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Purple", hex: DEFAULT_COUNTRY_FILL },
];

export function ColorPicker() {
  const [color, setColor] = useAtom(activeColorAtom);
  useEffect(() => {
    if (!color) {
      setColor(colors.find((c) => c.name === "Purple"));
    }
  }, []);
  return (
    <div>
      Choose a color:
      <ul className="flex gap-2">
        {colors.map((c) => (
          <li
            onClick={() => setColor(c)}
            key={c.name}
            className={color === c ? "underline" : ""}
          >
            {c.name}
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}
