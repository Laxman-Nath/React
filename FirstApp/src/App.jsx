import { useEffect } from "react";
import { DerivedState } from "./Components/DerivedState";
import { EventHandling } from "./Components/EventHandling";
import { EventPropagation } from "./Components/EventPropagation";
import { EventProps } from "./Components/EventProps";
import { State } from "./Components/Hooks/State";
// import { UseEffectHook } from "./Components/Hooks/UseEffect";
import { LiftStateUp } from "./Components/LiftStateup";
import { Login } from "./Components/Login";
import { MiniProject } from "./Components/MiniProject1";
import { NetFlixSeries } from "./Components/NetFlixSeries"; /// this is mixed export
import { Profile } from "./Components/Profile/Profile";
import { RegistrationProper } from "./Components/RegisterProper";
import { RegistrationForm } from "./Components/RegistrationForm";
// import { Challenge } from "./Components/Hooks/UseEffectChallenge";
// import { CleanUp } from "./Components/Hooks/CleanUp";
import { NotToFetchApiData } from "./Components/FetchApiData/NotToFetchApiData";
import { UseRef } from "./Components/Hooks/UseRef";
import { ForwardRef } from "./Components/Hooks/UseRef/ForwardRef";
import { UseId } from "./Components/Hooks/UseId";
import { Parent } from "./Components/PropsDrilling";
// import { Home } from "./Components/ContextApi/Home";
// import { BioContextProvider } from "./Components/ContextApi/ContextApi";
// import { About } from "./Components/ContextApi/About";
import { UseReducer } from "./Components/Hooks/UseReducer";
import { SideBar } from "./Components/SideBar";
import { Index } from "./Components/Hooks/UseReducer/index2";
import { MemoCounts } from "./Components/Hooks/UseMemo/MemoCount";
import { UseMemo } from "./Components/Hooks/UseMemo/UseMemo";
import { UseCallBack } from "./Components/Hooks/UseMemo/UseCallBack";
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
      {/* <Login/> */}
      {/* <UseEffectHook/> */}
      {/* <Challenge/> */}
      {/* <CleanUp/> */}
      {/* <NotToFetchApiData/> */}
      {/* <UseRef/> */}
      {/* <ForwardRef/> */}
      {/* <UseId/> */}
      {/* <Parent/> */}

      {/* <BioContextProvider>
        <Home />
        <About/>
      </BioContextProvider> */}

      {/* <UseReducer/> */}
      {/* <SideBar/> */}
      {/* <Index/> */}
      {/* <MemoCounts/> */}
      {/* <UseMemo/> */}

      <UseCallBack/>
      
    </>
  );
};

export default App;
