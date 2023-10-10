import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  Modal,
  Image,
  StatusBar,
} from 'react-native';
import goalImage from '../assets/images/goal.png';
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal visible={props.visible} animationType='slide' statusBarTranslucent>
      <View style={styles.inputContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Curso react native - Section 2</Text>
        </View>
        <View style={styles.inputContent}>
          <Image style={styles.image} source={goalImage} />
          <TextInput
            style={styles.textInput}
            placeholder='Seus objetivos no curso'
            placeholderTextColor='#120438'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Adicionar objetivo'
                onPress={() => {
                  props.addGoalHandler(enteredGoalText);
                  setEnteredGoalText('');
                  props.handleCloseModal();
                }}
                disabled={enteredGoalText == ''}
                color='#b180f0'
              />
            </View>
            <View style={{ ...styles.button, marginTop: 8 }}>
              <Button
                title='Cancelar'
                onPress={props.handleCloseModal}
                color='#f31282'
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 8,
    paddingBottom: 32,
    backgroundColor: '#311b6b',
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  inputContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#e4d0ff',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    width: '100%',
    padding: 8,
    color: '#120438',
    backgroundColor: '#e4d0ff',
    borderColor: '#e4d0ff',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  button: {
    width: '60%',
  },
});

export default GoalInput;
