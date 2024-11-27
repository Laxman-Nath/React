import { EventHandling } from "./Components/EventHandling";
import { EventProps } from "./Components/EventProps";
import { NetFlixSeries } from "./Components/NetFlixSeries"; /// this is mixed export
import { Profile } from "./Components/Profile/Profile";
const App = () => {
  return (
    <>
      {/* <NetFlixSeries /> */}
      {/* <Profile/> */}
      {/* <EventHandling/> */}
      <EventProps />
    </>
  );
};

export default App;
