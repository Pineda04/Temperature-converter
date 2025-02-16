import { StyleSheet } from "react-native"
import { Colors } from "@/constants/Colors"

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1
  },

  converterContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20
  },

  input: {
    color: Colors.textPrimary,
    fontSize: 60,
    textAlign: 'right',
    fontFamily: 'BebasNeue-Regular',
    padding: 0,
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 45,
    textAlign: 'right',
    fontWeight: 400,
    marginRight: 20,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10
  },

  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  unitButton: {
    height: 75,
    width: 75,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 15,
  },

  unitButtonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: Colors.textPrimary,
    fontFamily: 'BebasNeue-Regular',
    fontWeight: '300'
  },

  unitLabel: {
    color: Colors.textSecondary,
    fontSize: 30,
    fontFamily: 'BebasNeue-Regular',
    marginLeft: 30,
    marginBottom: 5,
  },
});