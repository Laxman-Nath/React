// import NetFlixSeries from "./Components/NetFlixSeries";
// import NetFlix from "./Components/NetFlixSeries"; // this is default import we can use any name it is not necessary to have name of component

// import NetFlixSeries from "./Components/NetFlixSeries"; // this is named import it should have same name of as of component also we can have more than one named import in any file
import NetFlixSeries,{Footer} from "./Components/NetFlixSeries"; /// this is mixed export
const App = () => {
  // return <div>
  //   <NetFlix/>
  //   <NetFlix/>
  //   <NetFlix/>
  //   <NetFlix/>
  //   <NetFlix/>
  // </div>

  return (
    <>
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
      <Footer/>
    </>
  );
};

export default App;
