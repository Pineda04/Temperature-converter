import { View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { globalStyles } from '@/styles/global-styles'

const _layout = () => {
  const [] = useFonts({
    BebasNeueRegular: require('../assets/fonts/BebasNeue-Regular.ttf')
  })

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style='light'/>
    </View>
  )
}

export default _layout