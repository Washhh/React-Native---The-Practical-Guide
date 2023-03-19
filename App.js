import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Curso react native - Section 2</Text>
        </View>
        <GoalInput onChangeText={goalInputHandler}/>
        <View style={styles.buttonContainer}>
          <Button
            title='Adicionar objetivo'
            onPress={addGoalHandler}
            disabled={enteredGoalText == ''}
          />
        </View>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => `${index}-${item}`}
          renderItem={(itemData) => <GoalItem text={itemData.item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  goalsContainer: {
    flex: 3,
  },
  goalItem: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#FFF',
  },
});
