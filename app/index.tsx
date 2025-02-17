import { View } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import TemperatureInput from '@/components/TemperatureInput'
import UnitSelector from '@/components/UnitSelector'
import { useTemperatureConverter } from '@/hooks/useTemperatureConverter'

const TemperatureConverter = () => {
  const {
    inputValue,
    setInputValue,
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    result
  } = useTemperatureConverter()

  return (
    <View style={globalStyles.converterContainer}>
      {/* Resultado */}
      <TemperatureInput
        value={inputValue}
        onChangeText={setInputValue}
      />
      
      <ThemeText variant="h2">
        {result ? `${result}°${toUnit}` : '0'}
      </ThemeText>
      

      {/* Unidad base*/}
      <ThemeText style={globalStyles.unitLabel}>De:</ThemeText>
      <View style={globalStyles.row}>
        <UnitSelector
          label="°C"
          selected={fromUnit === 'C'}
          onPress={() => setFromUnit('C')}
          testID="unit-selector-°C" 
        />
        <UnitSelector
          label="°F"
          selected={fromUnit === 'F'}
          onPress={() => setFromUnit('F')}
          testID="unit-selector-°F"
        />
        <UnitSelector
          label="K"
          selected={fromUnit === 'K'}
          onPress={() => setFromUnit('K')}
          testID="unit-selector-K"
        />
      </View>

      {/* Unidad a convertir */}
      <ThemeText style={globalStyles.unitLabel}>A:</ThemeText>
      <View style={globalStyles.row}>
        <UnitSelector
          label="°C"
          selected={toUnit === 'C'}
          onPress={() => setToUnit('C')}
          testID="unit-selector-C"
        />
        <UnitSelector
          label="°F"
          selected={toUnit === 'F'}
          onPress={() => setToUnit('F')}
          testID="unit-selector-F"
        />
        <UnitSelector
          label="K"
          selected={toUnit === 'K'}
          onPress={() => setToUnit('K')}
          testID="unit-selector-K"
        />
      </View>
    </View>
  )
}

export default TemperatureConverter
