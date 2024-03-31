import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

interface NumberContainer {
  number: number;
}

export const NumberContainer = ({ number }: NumberContainer) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.secondary500,
    fontSize: 36,
    fontFamily: 'open-sans'
  },
});
