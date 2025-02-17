import { TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'

interface Props {
    value: string,
    onChangeText: (text: string) => void,
}

const TemperatureInput = ({ value, onChangeText }: Props) => {
  return (
    <View style={globalStyles.inputContainer}>
      <TextInput
        style={globalStyles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        placeholder="0"
        placeholderTextColor={Colors.textPrimary}
        testID="temperature-input"
      />
    </View>
  )
}

export default TemperatureInput
