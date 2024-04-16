import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { Button } from '../../components/Button';
import { useMemo, useState } from 'react';
import Colors from '../../utils/colors';
import { Title } from '../../components/Title';

interface StartGameProps {
  setUserNumber: (userNumber: number) => void;
}

export const StartGame = ({ setUserNumber }: StartGameProps) => {
  const { height } = useWindowDimensions();

  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandle = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredNumber('');
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 999) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 999.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    setUserNumber(chosenNumber);
  };

  const marginTop = useMemo(() => {
    return height < 380 ? 30 : 100;
  }, [height]);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior='position'>
        <View style={[styles.container, { marginTop }]}>
          <Title
            text='Section 4 - Guess My Number'
            textStyle={{ marginHorizontal: 16 }}
          />
          <View style={styles.content}>
            <Text style={styles.inputTitle}>Enter a number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                maxLength={3}
                keyboardType='numeric'
                style={styles.input}
                value={enteredNumber}
                onChangeText={numberInputHandle}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button text='Reset' onPress={resetInputHandler} />
              <Button text='Confirm' onPress={confirmInputHandler} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: Colors.primary700,
    marginTop: 72,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  inputTitle: {
    fontSize: 32,
    color: Colors.secondary500,
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    color: Colors.secondary500,
    borderBottomWidth: 2,
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
