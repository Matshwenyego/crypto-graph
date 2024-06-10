// import React from "react";
// import { render } from "@testing-library/react-native";
// import Connectivity from ".";

// describe("Connectivity Component", () => {
//   it("renders correctly", () => {
//     const { getByTestId } = render(
//       <Connectivity transparent={true} visible={true} />
//     );
//     const nointernetView = getByTestId("no-internet");
//     expect(nointernetView).toBeDefined();
//   });

//   it("renders correctly when visible props is set to false", () => {
//     const { queryByTestId } = render(
//         <Connectivity transparent={true} visible={false} />
//       );
//       const nointernetView = queryByTestId("no-internet");
//       expect(nointernetView).toBeNull();
//   });

//   it("renders correctly when transparent props is set to false", () => {
//     const { getByTestId } = render(
//         <Connectivity transparent={false} visible={true} />
//       );
//       const nointernetView = getByTestId("no-internet");
//       expect(nointernetView).toBeDefined();
//   });
// });
