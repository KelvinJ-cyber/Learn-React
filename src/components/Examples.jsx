import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [selectedContent, setSelectedContent] = useState("");

  function handleClick(selectedButton) {
    // selectedButton => 'Components', 'JSX', 'State', 'Props'
    setSelectedContent(selectedButton);
  }
  return (
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
  );
}
