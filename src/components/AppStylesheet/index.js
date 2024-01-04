import { StyleSheet, PixelRatio } from "react-native";

export const iconSize = 60 * PixelRatio.getFontScale();
export const primaryColor = "#fbfcfc";
export const secondaryColor = "#d4f6f1";
export const backgroundColor = "#0303b5";
export const foregroundColor = "#5dc1b9";

export default StyleSheet.create({
  Title: {
    color: primaryColor,
    fontWeight: "bold",
    fontSize: 28 * PixelRatio.getFontScale(),
    textAlign: "center",
  },
  SubTitle: {
    color: secondaryColor,
    fontSize: 24 * PixelRatio.getFontScale(),
    textAlign: "center",
  },
  Text: {
    color: secondaryColor,
    fontSize: 20 * PixelRatio.getFontScale(),
    textAlign: "center",
  },
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColor,
  },
  ButtonSquare: {
    backgroundColor: foregroundColor,
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  VideoPlayer: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 },
});
