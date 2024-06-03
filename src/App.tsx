import { ColorPicker } from "./components/color-picker";
import { GroupedCountries } from "./components/grouped-countries";
import { WorldMap } from "./components/world-map";

function App() {
  return (
    <>
      <ColorPicker />
      <div className="flex gap-8">
        <div className="w-3/5">
          <h1 className="text-2xl font-bold">World Map</h1>
          <WorldMap />
        </div>
        <div className="w-2/5">
          <h1 className="text-2xl font-bold">Grouped Countries</h1>
          <GroupedCountries />
        </div>
      </div>
    </>
  );
}

export default App;
