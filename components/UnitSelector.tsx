import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from "expo-haptics";

interface Props {
  label: string;
  selected: boolean;
  onPress: () => void;
  testID?: string;
}

const UnitSelector = ({ label, selected, onPress, testID }: Props) => {
  return (
    <Pressable
      testID={testID}
      style={({ pressed }) => ({
        ...globalStyles.unitButton,
        backgroundColor: selected ? Colors.purple : Colors.darkGray,
        opacity: pressed ? 0.8 : 1,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text style={globalStyles.unitButtonText}>{label}</Text>
    </Pressable>
  );
};

export default UnitSelector;
