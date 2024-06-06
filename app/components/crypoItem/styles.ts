import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  ticker: {
    flex: 0.33,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  center: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "center",
  },
  timestamp: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default styles;
