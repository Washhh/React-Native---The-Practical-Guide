import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../utils/colors';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';

interface GameOverProps {
  userNumber: number;
  guesses: number[];
  resetGame: () => void;
}

export const GameOver = ({ userNumber, guesses, resetGame }: GameOverProps) => {
  return (
    <View style={style.container}>
      <Title text='Game Over' />
      <View style={style.imageContainer}>
        <View style={style.imageBorder}>
          <Image
            style={style.image}
            source={require('../../../assets/images/success.png')}
          />
        </View>
      </View>
      <View style={style.textContainer}>
        <Text style={style.text}>
          The device got the number{' '}
          <Text
            style={{
              ...style.text,
              color: Colors.primary600,
              fontFamily: 'open-sans-bold',
            }}
          >
            {userNumber}
          </Text>{' '}
          right after{' '}
          <Text
            style={{
              ...style.text,
              color: Colors.primary600,
              fontFamily: 'open-sans-bold',
            }}
          >
            {guesses.length}
          </Text>{' '}
          tries
        </Text>
      </View>
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
      <View style={style.buttonContainer}>
        <Button text='Start New Game' onPress={resetGame} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 32,
  },
  imageBorder: {
    borderWidth: 4,
    borderRadius: 150,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    width: 300,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
  buttonContainer: {
    margin: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
