import Inputform from "./Components/Inputform";
import OutputInfo from "./Components/OutputInfo";
import "./index.css";

function App() {
  return (
    <div>
      <Inputform />
      <div className="OutputContainer">
        <OutputInfo />
      </div>
    </div>
  );
}

export default App;
