import { DerivedState } from "./Components/DerivedState";
import { EventHandling } from "./Components/EventHandling";
import { EventPropagation } from "./Components/EventPropagation";
import { EventProps } from "./Components/EventProps";
import { State } from "./Components/Hooks/State";
import { LiftStateUp } from "./Components/LiftStateup";
import { Login } from "./Components/Login";
import { MiniProject } from "./Components/MiniProject1";
import { NetFlixSeries } from "./Components/NetFlixSeries"; /// this is mixed export
import { Profile } from "./Components/Profile/Profile";
import { RegistrationProper } from "./Components/RegisterProper";
import { RegistrationForm } from "./Components/RegistrationForm";
const App = () => {
  return (
    <>
      {/* <NetFlixSeries /> */}
      {/* <Profile/> */}
      {/* <EventHandling/> */}
      {/* <EventProps /> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <DerivedState/> */}
      {/* <LiftStateUp/> */}
      {/* <MiniProject/> */}
      {/* <RegistrationForm/> */}
      {/* <RegistrationProper/> */}
      <Login/>
    </>
  );
};

export default App;
