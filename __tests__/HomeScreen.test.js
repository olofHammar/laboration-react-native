import React from "react";
import HomeScreen from "../scr/screens/HomeScreenFolder/HomeScreen";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

it("renders correctly", () => {
  renderer.create(<HomeScreen />);
});

it("text renders correctly", () => {
  const { getByText } = render(<HomeScreen />);
  const element = getByText("Memes App");
});

it("button is clickable", () => {
  const { getByText } = render(<HomeScreen />);

  const button = getByText("Update My Opinion");
  fireEvent.press(button);
});

it("user input handles correctly", () => {
  const { getByTestId, getByText, getByPlaceholderText } = render(
    <HomeScreen />
  );

  fireEvent.changeText(
    getByPlaceholderText("Enter what you think of memes...."),
    "great"
  );

  fireEvent.press(getByText("Update My Opinion"));

  expect(getByTestId("testInputText").props.children).toBe("great");
});

it("matches snapshot", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

