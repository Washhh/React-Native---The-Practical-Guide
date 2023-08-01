import { StyleSheet, Text, View, Pressable } from 'react-native';
function GoalItem(props) {
  return (
    <Pressable android_ripple={{color: 'red'}} onPress={props.onDelete.bind(this, props.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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

export default GoalItem;
