import "./App.css";
import Row from "./components/Row";

const rowData = [
  {
    time: 1,
    name: "Jacob",
  },
  {
    time: 3,
    name: "Michelangelo",
  },
  {
    time: 5,
    name: "Raphael",
  },
  {
    time: 8,
    name: "Splinter",
  },
];

function App() {
  return (
    <>
      <h1>PoC</h1>
      {/* For top value, the row height is set as w-12 or 48px currently. For multiple rows, we must pass in */}
      <Row data={rowData} stackNumber={0}></Row>
      <Row data={rowData} stackNumber={1}></Row>
      <Row data={rowData} stackNumber={2}></Row>
    </>
  );
}

export default App;
