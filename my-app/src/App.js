import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import GoodBye from "./components/Goodbye";
import MainContent from "./components/MainContent";

//this is the JSX code
//and this function is called the app component or a custom component
function App() {
  return (
    <div>
      <Welcome />
      <MainContent logo={logo} />
      <GoodBye />
    </div>
  );
}

//no modules are used in React
//we just use "export"
export default App;
