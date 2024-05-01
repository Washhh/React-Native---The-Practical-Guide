import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { StackScreens } from "../../../../App";

interface CategoryGridTileProps {
  title: string;
  color: string;
  id: string;
}

export const CategoryGridTile = ({
  title,
  color,
  id,
}: CategoryGridTileProps) => {
  const navigation = useNavigation<NavigationProp<StackScreens>>();
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() =>
          navigation.navigate("MealsOverview", {
            categoryId: id,
          })
        }
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
