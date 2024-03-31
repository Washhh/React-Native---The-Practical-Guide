import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import Colors from '../../utils/colors';

interface TitleProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
}

export const Title = ({ text, textStyle }: TitleProps) => {
  return <Text style={[styles.container, textStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
    fontFamily: 'open-sans-bold'
  },
});
