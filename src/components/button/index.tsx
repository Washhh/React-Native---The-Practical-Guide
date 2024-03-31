import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import Colors from '../../utils/colors';

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
  return (
    <View style={[styles.buttonOutContainer, buttonStyle]}>
      <Pressable
        style={({ pressed }) =>
          pressed && Platform.OS === 'ios'
            ? [styles.pressedIOS, styles.buttonInnerContainer]
            : [styles.buttonInnerContainer]
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOutContainer: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,

  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'open-sans'
  },
  pressedIOS: {
    opacity: 0.75,
  },
});
