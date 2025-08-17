import { useState } from "react";
import Header from "./components/Header.jsx";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <br />
            <ul>
              <CoreConcept {...CORE_CONCEPTS[0]} /> 
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept
                title={CORE_CONCEPTS[3].title}
                description={CORE_CONCEPTS[3].description}
                img={CORE_CONCEPTS[3].image}
              />
            </ul>
          </section>
          <h2>Time to get started!</h2>
        </main>
      </div>
    </>
  );
}

export default App;
