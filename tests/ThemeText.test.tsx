import React from 'react';
import { render } from '@testing-library/react-native';
import ThemeText from '@/components/ThemeText';

describe('ThemeText Component', () => {
  it('Renderiza correctamente el texto con el estilo h1', () => {
    const { getByText } = render(<ThemeText variant="h1">Titulo de prueba</ThemeText>);

    expect(getByText('Titulo de prueba')).toBeTruthy();
  });

  it('Renderiza correctamente el texto con el estilo h2', () => {
    const { getByText } = render(<ThemeText variant="h2">Subtitulo de prueba</ThemeText>);

    expect(getByText('Subtitulo de prueba')).toBeTruthy();
  });
});
