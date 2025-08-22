import { useState } from "react";
import Header from "./components/Header.jsx";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

// ? This is the main application component that renders the header, core concepts, and examples sections.

function App() {
  const [selectedContent, setSelectedContent] = useState("");

  function handleClick(selectedButton) {
    // selectedButton => 'Components', 'JSX', 'State', 'Props'
    setSelectedContent(selectedButton);
  }

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
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton
                isSelected={selectedContent == "components"}
                onClick={() => handleClick("components")}
              >
                Components
              </TabButton>
              <TabButton
                onClick={() => handleClick("jsx")}
                isSelected={selectedContent == "jsx"}
              >
                JSX
              </TabButton>
              <TabButton
                onClick={() => handleClick("state")}
                isSelected={selectedContent == "state"}
              >
                State
              </TabButton>
              <TabButton
                onClick={() => handleClick("props")}
                isSelected={selectedContent == "props"}
              >
                props
              </TabButton>
            </menu>
            {!selectedContent ? (
              <p>Please select a topic.</p>
            ) : (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedContent].title}</h3>
                <p>{EXAMPLES[selectedContent].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedContent].code}</code>
                </pre>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
