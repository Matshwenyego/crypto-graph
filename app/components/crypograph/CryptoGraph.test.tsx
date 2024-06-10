// import React from "react";
// import { render, fireEvent } from "@testing-library/react-native";
// import CryptoGraph from ".";

// describe("CryptoGraph Component", () => {
//   it("renders correctly", () => {
//     const { getByTestId } = render(
//       <CryptoGraph
//         crypto_array={[40000.0, 41000.0]}
//         current_crypto={{
//           s: "BTC",
//           p: "40000.00",
//           dc: "2.5",
//         }}
//       />
//     );
//     const graphView = getByTestId("graph");
//     expect(graphView).toBeDefined();
//   });

//   it("renders skeletons when props are not provided", () => {
//     const { getByTestId } = render(
//       <CryptoGraph crypto_array={[]} current_crypto={null} />
//     );
//     const graphView = getByTestId("graph");
//     expect(graphView).toBeDefined();
//   });

//   it("handles graph on dot press correctly", () => {
//     const { getByTestId } = render(
//       <CryptoGraph
//         crypto_array={[40000.0, 41000.0]}
//         current_crypto={{
//           s: "BTC",
//           p: "40000.00",
//           dc: "2.5",
//         }}
//       />
//     );
//     const chartView = getByTestId("chart");

//     fireEvent(chartView, "onDataPointClick", {
//       value: 40000.0,
//       x: 50,
//       y: 100,
//     });

//     // cant find dot  
//     // expect(chartView.children.some(child => console.log(child.children[0].props.children[0].props))).toBeTruthy();
//   });
// });
