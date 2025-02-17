import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TemperatureInput from '@/components/TemperatureInput';

describe('TemperatureInput Component', () => {
  it('Permite ingresar valores numéricos', () => {
    const mockOnChangeText = jest.fn();

    const { getByPlaceholderText } = render(
      <TemperatureInput value="0" onChangeText={mockOnChangeText} />
    );

    const input = getByPlaceholderText('0'); // Busca el input con placeholder '0'
    
    fireEvent.changeText(input, "24"); // Simula el cambio de texto

    expect(mockOnChangeText).toHaveBeenCalledWith('24');
  });
});
