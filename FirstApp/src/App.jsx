import { DerivedState } from "./Components/DerivedState";
import { EventHandling } from "./Components/EventHandling";
import { EventPropagation } from "./Components/EventPropagation";
import { EventProps } from "./Components/EventProps";
import { State } from "./Components/Hooks/State";
import { NetFlixSeries } from "./Components/NetFlixSeries"; /// this is mixed export
import { Profile } from "./Components/Profile/Profile";
const App = () => {
  return (
    <>
      {/* <NetFlixSeries /> */}
      {/* <Profile/> */}
      {/* <EventHandling/> */}
      {/* <EventProps /> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      <DerivedState/>
    </>
  );
};

export default App;
