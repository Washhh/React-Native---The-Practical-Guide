import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { CardWithShadow } from "../../../../components/CardWithShadow";

interface MealItemProps {
  title: string;
  imageUrl: string;
  duration: string;
  complexity: string;
  affordability: string;
}

export const MealItem = ({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}: MealItemProps) => {
  return (
    <CardWithShadow extraStyles={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </CardWithShadow>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
  },
  buttonPressed: {
    opacity: 0.65,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
