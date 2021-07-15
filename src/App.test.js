import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import data from "./topics.json";

const { topics } = data;

test("the topics data is correct", () => {
  expect(topics).toMatchSnapshot;
  expect(topics).toHaveLength(30);
});

for (let i = 0; i < topics.length; i += 1) {
  test(`topics[${i}] should have properties (label, volume, sentiment, sentimentScore)`, () => {
    expect(topics[i]).toHaveProperty("label");
    expect(topics[i]).toHaveProperty("volume");
    expect(topics[i]).toHaveProperty("sentiment");
    expect(topics[i]).toHaveProperty("sentimentScore");
  });
}

test("header renders with correct text", () => {
  const { getByTestId } = render(<App />);
  const headerEl = getByTestId("header");
  expect(headerEl.textContent).toBe("My Topics Challenge");
});
