import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import Categories from "./screens/Categories";
import { MealsOverview } from "./screens/MealsOverview";
import Meal from "../models/meal";
import { MealDetails } from "./screens/MealDetails";

export type StackScreens = {
  Categories: undefined;
  MealsOverview: {
    categoryId: string;
  };
  MealDetails: {
    meal: Meal;
  };
};

const Stack = createNativeStackNavigator<StackScreens>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            title: "All Categories",
          }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverview} />
        <Stack.Screen name="MealDetails" component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
