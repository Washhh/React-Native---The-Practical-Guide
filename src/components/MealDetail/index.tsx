import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface MealDetailProps {
  duration: string;
  complexity: string;
  affordability: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const MealDetail = ({
  duration,
  affordability,
  complexity,
  style,
  textStyle,
}: MealDetailProps) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
