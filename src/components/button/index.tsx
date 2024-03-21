import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
}: ButtonProps) => {
  const buttonMergedStyle = StyleSheet.compose(styles.button, buttonStyle);
  const textMergedStyle = StyleSheet.compose(styles.text, textStyle);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={buttonMergedStyle}>
        <Text style={textMergedStyle}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderColor: "#000",
    borderWidth: 1,
  },
  text: {
    color: "#000",
    fontSize: 16,
  },
});
