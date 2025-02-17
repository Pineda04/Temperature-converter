import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TemperatureConverter from "../app/index";

describe("Aplicación Completa", () => {
  it("Convierte 0°C a Fahrenheit correctamente", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <TemperatureConverter />
    );

    // Encuentra el input de temperatura
    const input = getByPlaceholderText("0");

    // Ingresa 0 como valor inicial
    fireEvent.changeText(input, "0");

    const destinationFahrenheitButton = getByTestId("unit-selector-F");
    fireEvent.press(destinationFahrenheitButton);

    // Verificar si el resultado se actualiza correctamente
    const resultText = getByText("32.00°F");
    expect(resultText).toBeTruthy();
    return resultText;
  });

  it("Convierte temperatura negativa a Fahrenheit correctamente", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <TemperatureConverter />
    );

    // Encuentra el input de temperatura
    const input = getByPlaceholderText("0");

    // Ingresa un valor de temperatura negativo
    fireEvent.changeText(input, "-40");

    const destinationFahrenheitButton = getByTestId("unit-selector-F");
    fireEvent.press(destinationFahrenheitButton);

    const resultText = getByText("-40.00°F");
    expect(resultText).toBeTruthy();
    return resultText;
  });

  it("Convierte temperatura decimal a Fahrenheit correctamente", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <TemperatureConverter />
    );

    // Encuentra el input de temperatura
    const input = getByPlaceholderText("0");

    // Ingresa un valor de temperatura con decimal
    fireEvent.changeText(input, "37.5");

    const destinationFahrenheitButton = getByTestId("unit-selector-F");
    fireEvent.press(destinationFahrenheitButton);

    const resultText = getByText("99.50°F");
    expect(resultText).toBeTruthy();
    return resultText;
  });
});
