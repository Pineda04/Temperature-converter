import { renderHook, act } from '@testing-library/react-native';
import { useTemperatureConverter } from '@/hooks/useTemperatureConverter';

describe('useTemperatureConverter Hook', () => {
  it('Convierte correctamente de Celsius a Fahrenheit', () => {
    const { result } = renderHook(() => useTemperatureConverter());

    act(() => {
      result.current.setInputValue('100'); // 100°C
      result.current.setFromUnit('C');
      result.current.setToUnit('F');
    });

    expect(result.current.result).toBe('212.00'); // 100°C → 212°F
  });

  it('Convierte correctamente de Kelvin a Celsius', () => {
    const { result } = renderHook(() => useTemperatureConverter());

    act(() => {
      result.current.setInputValue('273.15'); // 273.15K
      result.current.setFromUnit('K');
      result.current.setToUnit('C');
    });

    expect(result.current.result).toBe('0.00'); // 273.15K → 0°C
  });

  it('Convierte correctamente de Fahrenheit a Kelvin', () => {
    const { result } = renderHook(() => useTemperatureConverter());

    act(() => {
      result.current.setInputValue('32'); // 32°F
      result.current.setFromUnit('F');
      result.current.setToUnit('K');
    });

    expect(result.current.result).toBe('273.15'); // 32°F → 273.15K
  });

  it('Maneja entradas inválidas correctamente', () => {
    const { result } = renderHook(() => useTemperatureConverter());

    act(() => {
      result.current.setInputValue('abc');
    });

    expect(result.current.result).toBe('');
  }); 
});
