import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Title } from '../../components/Title';
import { useMemo, useState } from 'react';
import { NumberContainer } from '../../components/NumberContainer';
import { Button } from '../../components/Button';
import Colors from '../../utils/colors';

interface GameProps {
  userNumber: number;
  onGameOver: (guesses: number[]) => void;
}

const generateNewGuess = (currentGuess: number, min: number, max: number) => {
  let newGuess = 0;
  while (1) {
    const currentRandomNumber = generateRandomNumber(min, max);
    if (currentRandomNumber !== currentGuess) {
      newGuess = currentRandomNumber;
      break;
    }
  }
  return newGuess;
};

const generateRandomNumber = (min: number, max: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return randomNumber;
};

export const Game = ({ userNumber, onGameOver }: GameProps) => {
  const { width } = useWindowDimensions();

  const [minAndMax, setMinAndMax] = useState({
    min: 1,
    max: 1000,
  });

  const initialGuess = generateNewGuess(
    userNumber,
    minAndMax.min,
    minAndMax.max
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState([initialGuess]);

  const handleWrongResponse = () => {
    Alert.alert(
      "Hey, Don't lie to the computer",
      'You must be honest and inform whether the number you chose is smaller or larger than the guess presented.'
    );
  };

  const checkGameOver = (guess: number) => {
    if (guess === userNumber) {
      onGameOver(guesses);
    }
  };

  const handleClickPlusButton = () => {
    if (currentGuess > userNumber) {
      handleWrongResponse();
      return;
    }
    setMinAndMax({
      min: currentGuess + 1,
      max: minAndMax.max,
    });
    const newGuess = generateRandomNumber(currentGuess + 1, minAndMax.max);
    setCurrentGuess(newGuess);
    setGuesses([newGuess, ...guesses]);
    checkGameOver(newGuess);
  };

  const handleClickMinusButton = () => {
    if (currentGuess < userNumber) {
      handleWrongResponse();
      return;
    }
    setMinAndMax({
      min: minAndMax.min,
      max: currentGuess,
    });
    const newGuess = generateRandomNumber(minAndMax.min, currentGuess);
    setCurrentGuess(newGuess);
    setGuesses([newGuess, ...guesses]);
    checkGameOver(newGuess);
  };

  const content =
    width < 500 ? (
      <>
        <NumberContainer number={currentGuess} />
        <View style={style.buttonsContainer}>
          <Button
            text='+'
            textStyle={{ fontSize: 24 }}
            onPress={handleClickPlusButton}
          />
          <Button
            text='-'
            textStyle={{ fontSize: 24 }}
            onPress={handleClickMinusButton}
          />
        </View>
      </>
    ) : (
      <View style={style.contentWide}>
        <View style={style.buttonsContainerWide}>
          <Button
            text='+'
            textStyle={{ fontSize: 24 }}
            onPress={handleClickPlusButton}
          />
        </View>
        <NumberContainer number={currentGuess} />
        <View style={style.buttonsContainerWide}>
          <Button
            text='-'
            textStyle={{ fontSize: 24 }}
            onPress={handleClickMinusButton}
          />
        </View>
      </View>
    );

  return (
    <View style={style.container}>
      <Title text="Opponent's Guess" />
      {content}
      <View>
        <FlatList
          horizontal
          data={guesses}
          keyExtractor={(guess, index) => `${guess}-${index}`}
          renderItem={({ item }) => {
            return (
              <View style={style.guessLogsContainer}>
                <Text style={style.guessLogText}>{item}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => (
            <View style={style.guessLogSeparator}>
              <Text style={style.guessLogText}>-</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 24,
    alignItems: 'center',
  },
  contentWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  guessLogsContainer: {
    padding: 16,
  },
  guessLogText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.primary600,
  },
  guessLogSeparator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
