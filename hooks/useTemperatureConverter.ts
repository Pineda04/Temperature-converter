import { useState, useEffect } from 'react';

type TemperatureUnit = 'C' | 'F' | 'K';

export const useTemperatureConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>('C');
  const [toUnit, setToUnit] = useState<TemperatureUnit>('F');
  const [result, setResult] = useState('');

  const validateAndSetInput = (value: string) => {
    // Validar signos
    if (value === '') {
      setInputValue('');
      return;
    }

    let hasMinus = false;
    let hasDot = false;

    for (let i = 0; i < value.length; i++) {
      const char = value[i];

      // Verificar si es un dígito
      if ('0123456789'.includes(char)) {
        continue;
      }

      if (char === '-') {
        if (i !== 0 || hasMinus) {
          return;
        }
        hasMinus = true;
        continue;
      }

      if (char === '.') {
        if (hasDot) {
          return;
        }
        hasDot = true;
        continue;
      }

      return;
    }

    setInputValue(value);
  };

  const convertTemperature = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('');
      return;
    }

    let converted: number;

    // Convertir a Celsius primero
    let celsius: number;
    switch (fromUnit) {
      case 'F':
        celsius = (value - 32) * (5 / 9);
        break;
      case 'K':
        celsius = value - 273.15;
        break;
      default:
        celsius = value;
    }

    // Convertir desde Celsius a la unidad
    switch (toUnit) {
      case 'F':
        converted = (celsius * 9 / 5) + 32;
        break;
      case 'K':
        converted = celsius + 273.15;
        break;
      default:
        converted = celsius;
    }

    setResult(converted.toFixed(2));
  };

  useEffect(() => {
    convertTemperature();
  }, [inputValue, fromUnit, toUnit]);

  return {
    inputValue,
    setInputValue: validateAndSetInput,
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    result,
  };
};