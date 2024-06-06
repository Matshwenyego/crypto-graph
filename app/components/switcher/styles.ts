import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    borderRadius: 4,
  },
  barContainer: {
    flex: 0.5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    paddingLeft: 10,
    height: 40,
  },
  iconContainer: {
    flex: 0.5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
