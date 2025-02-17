import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UnitSelector from '@/components/UnitSelector';

describe('UnitSelector Component', () => {
  it('Se renderiza correctamente con el texto correcto', () => {
    const { getByText } = render(
      <UnitSelector label="°C" selected={false} onPress={() => {}} />
    );

    expect(getByText('°C')).toBeTruthy();
  });

  it('Ejecuta la función onPress cuando se presiona', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <UnitSelector label="°F" selected={false} onPress={onPressMock} />
    );

    fireEvent.press(getByText('°F'));

    expect(onPressMock).toHaveBeenCalled();
  });
});
