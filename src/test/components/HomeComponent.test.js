import { act } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import React from "react";
import { expect } from "chai";
import { HomeComponent } from "../../components/HomeComponent";
import jsdom from "mocha-jsdom";

global.document = jsdom({
  url: "http://localhost:3000",
});

let rootContainer;

beforeEach(() => {
  console.log("beforeEach");
  rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", "root");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Page render", function () {
  it("Renders heading", () => {
    act(() => {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<HomeComponent />);
    });
    const h1 = rootContainer.querySelector("h1");
    expect(h1.textContent).to.equal("Hello World!");
  });

  it("Renders heading xyz", () => {
    console.log("In it");
    act(() => {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<HomeComponent />);
    });
    const h1 = rootContainer.querySelector("h1");
    expect(h1.textContent).to.equal("Hello World!");
  });
});
