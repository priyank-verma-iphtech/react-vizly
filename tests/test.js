// We still need React because the component itself uses it
import React from 'react';
import { renderToString } from 'react-dom/server';
import { VizlyChart } from '../src/VizlyChart.js'; 

const testData = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 200 }
];

function runTest() {
  console.log("🚀 Starting Manual Terminal Test...");

  try {
    // 1. Manually create the element (This replaces <VizlyChart />)
    const element = React.createElement(VizlyChart, { 
      data: testData, 
      y: ["sales"] 
    });

    // 2. Convert it to a string of HTML/SVG
    const output = renderToString(element);

    // 3. Simple assertions using vanilla JS
    if (output.includes("<svg") || output.includes("<div")) {
      console.log("✅ TEST PASSED: Component rendered markup.");
      console.log("\n--- Rendered Output ---");
      console.log(output); 
      console.log("-----------------------\n");
    } else {
      throw new Error("Component returned empty string.");
    }

  } catch (error) {
    console.error("❌ TEST FAILED");
    console.error(error);
    process.exit(1);
  }
}

runTest();