import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { StackScreens } from "../../../../App";
import { CardWithShadow } from "../../../../components/CardWithShadow";

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
    <CardWithShadow extraStyles={styles.container}>
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
    </CardWithShadow>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
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
