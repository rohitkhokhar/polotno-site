import React from "react";
import ReactDOM from "react-dom/client";

import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";

import { Workspace } from "polotno/canvas/workspace";
import { SidePanel } from "polotno/side-panel";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { createStore } from "polotno/model/store";

import { DEFAULT_SECTIONS } from "polotno/side-panel";
import { ResizePanel } from "./resize-panel";

const ResizeSection = DEFAULT_SECTIONS.find(
  (section) => section.name === "size"
);
// overwrite its panel component
ResizeSection.Panel = ResizePanel;

const store = createStore({
  // this is a demo key just for that project
  // (!) please don't use it in your projects
  // to create your own API key please go here: https://polotno.com/cabinet
  key: "nFA5H9elEytDyPyvKL7T",
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true
});

export const App = () => {
  return (
    <PolotnoContainer className="polotno-app-container">
      <SidePanelWrap>
        <SidePanel
          store={store}
          sections={DEFAULT_SECTIONS}
          defaultSection="size"
        />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
