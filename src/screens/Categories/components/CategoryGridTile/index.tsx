import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

interface CategoryGridTileProps {
  title: string;
  color: string;
}

export const CategoryGridTile = ({ title, color }: CategoryGridTileProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View
          style={[
            styles.content,
            {
              backgroundColor: color,
            },
          ]}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({
      android: "hidden",
      ios: "visible",
    }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.65,
  },
  content: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
