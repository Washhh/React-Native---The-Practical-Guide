import { ReactNode } from "react";
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface CardWithShadowProps {
  children: ReactNode;
  extraStyles?: StyleProp<ViewStyle>;
}

export const CardWithShadow = ({
  children,
  extraStyles = null,
}: CardWithShadowProps) => {
  return <View style={[styles.container, extraStyles]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
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
});
