import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import GoodBye from "./components/Goodbye";
import MainContent from "./components/MainContent";

//this is the JSX code
//and this function is called the app component or a custom component

function List(props) {
  return <ol>{props.children}</ol>;
}

function Item(props) {
  return <li>{props.children}</li>;
}
function App() {
  return (
    <div>
      <Welcome />
      <List>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </List>
      <GoodBye />
    </div>
  );
}

//no modules are used in React
//we just use "export"
export default App;
