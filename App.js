import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  function deleteGoalHandler(courseGoalId) {
    const filteredCourseGoals = courseGoals.filter((courseGoal) => courseGoal.id !== courseGoalId)
    setCourseGoals(filteredCourseGoals)
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => `${index}-${item}`}
          renderItem={(itemData) => <GoalItem onDelete={deleteGoalHandler} item={itemData.item} />}
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
