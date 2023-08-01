import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Curso react native - Section 2</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder='Seus objetivos no curso'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Adicionar objetivo'
          onPress={() => {
            props.addGoalHandler(enteredGoalText);
            setEnteredGoalText('');
          }}
          disabled={enteredGoalText == ''}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 8,
    paddingBottom: 32,
    marginBottom: 16,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default GoalInput;
