import { StyleSheet, TextInput } from 'react-native';

function GoalInput(props) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder='Seus objetivos no curso'
      onChangeText={props.onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
});

export default GoalInput;
