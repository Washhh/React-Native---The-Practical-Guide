import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Colors from "../../utils/colors";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { useMemo } from "react";

interface GameOverProps {
  userNumber: number;
  guesses: number[];
  resetGame: () => void;
}

export const GameOver = ({ userNumber, guesses, resetGame }: GameOverProps) => {
  const { height } = useWindowDimensions();
  const content = useMemo(() => {
    if (height < 400) {
      return (
        <ScrollView>
          <Title text="Game Over" />
          <View style={style.contentWide}>
            <View style={[style.imageContainer, { marginTop: 12 }]}>
              <View style={[style.imageBorder, { width: 150, height: 150 }]}>
                <Image
                  style={style.image}
                  source={require("../../../assets/images/success.png")}
                />
              </View>
            </View>

            <View style={style.textContainer}>
              <Text style={style.text}>
                The device got the number{" "}
                <Text
                  style={{
                    ...style.text,
                    color: Colors.primary600,
                    fontFamily: "open-sans-bold",
                  }}
                >
                  {userNumber}
                </Text>{" "}
                right after{" "}
                <Text
                  style={{
                    ...style.text,
                    color: Colors.primary600,
                    fontFamily: "open-sans-bold",
                  }}
                >
                  {guesses.length}
                </Text>{" "}
                tries
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
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
          <View style={{ alignItems: "center" }}>
            <View style={style.buttonContainerWide}>
              <Button text="Start New Game" onPress={resetGame} />
            </View>
          </View>
        </ScrollView>
      );
    }
    return (
      <>
        <Title text="Game Over" />
        <View style={style.imageContainer}>
          <View style={style.imageBorder}>
            <Image
              style={style.image}
              source={require("../../../assets/images/success.png")}
            />
          </View>
        </View>
        <View style={style.textContainerWide}>
          <Text style={style.text}>
            The device got the number{" "}
            <Text
              style={{
                ...style.text,
                color: Colors.primary600,
                fontFamily: "open-sans-bold",
              }}
            >
              {userNumber}
            </Text>{" "}
            right after{" "}
            <Text
              style={{
                ...style.text,
                color: Colors.primary600,
                fontFamily: "open-sans-bold",
              }}
            >
              {guesses.length}
            </Text>{" "}
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
          <Button text="Start New Game" onPress={resetGame} />
        </View>
      </>
    );
  }, [height]);
  return <View style={style.container}>{content}</View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  contentWide: {
    flexDirection: "row",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 32,
  },
  imageBorder: {
    borderWidth: 4,
    borderRadius: 150,
    borderColor: Colors.primary700,
    overflow: "hidden",
    width: 300,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  textContainerWide: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    margin: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainerWide: {
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  guessLogsContainer: {
    padding: 16,
  },
  guessLogText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Colors.primary600,
  },
  guessLogSeparator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
