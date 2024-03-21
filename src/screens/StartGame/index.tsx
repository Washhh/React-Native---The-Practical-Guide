import { Text, View } from "react-native";
import { Button } from "../../components/button";

export const StartGame = () => {
  return (
    <View>
      <Text>Start Game</Text>
      <Button
        text="Botão"
        onPress={() => console.log("Cliquei em")}
        buttonStyle={{
          backgroundColor: "#92fa21",
        }}
      />
      <Button text="Botão2" onPress={() => console.log("Cliquei em")} />
    </View>
  );
};
