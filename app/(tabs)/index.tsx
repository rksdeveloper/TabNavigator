import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.content1}>Hello Tony stark</Text>    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
  content: {
    fontSize: 20
  },
  content1: {
    fontSize: 20,
    color: 'red'
  },
})
