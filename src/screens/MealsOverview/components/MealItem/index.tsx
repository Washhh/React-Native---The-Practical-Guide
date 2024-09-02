import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { CardWithShadow } from "../../../../components/CardWithShadow";
import { MealDetail } from "../../../../components/MealDetail";

interface MealItemProps {
  title: string;
  imageUrl: string;
  duration: string;
  complexity: string;
  affordability: string;
  onPress: () => void;
}

export const MealItem = ({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  onPress,
}: MealItemProps) => {
  return (
    <CardWithShadow extraStyles={styles.mealItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
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
});
