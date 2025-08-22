import Header from "./components/Header.jsx";
import "./App.css";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

// ? This is the main application component that renders the header, core concepts, and examples sections.

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
