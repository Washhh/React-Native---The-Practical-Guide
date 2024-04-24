import { registerRootComponent } from "expo";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Overview } from "./screens/Overview";

export type StackScreens = {
  Categories: undefined;
  Overview: undefined;
};

const Stack = createNativeStackNavigator<StackScreens>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Overview" component={Overview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
