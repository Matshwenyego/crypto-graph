import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',

  },
  overlay: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default styles;
