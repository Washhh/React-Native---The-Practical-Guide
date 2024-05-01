import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Button, FlatList, View } from "react-native";
import { StackScreens } from "../../App";
import { useLayoutEffect, useMemo } from "react";
import { CATEGORIES, MEALS } from "../../../data/dummy-data";
import Meal from "../../../models/meal";
import { MealItem } from "./components/MealItem";

export const MealsOverview = () => {
  const navigation = useNavigation<NavigationProp<StackScreens>>();
  const route = useRoute<RouteProp<StackScreens, "MealsOverview">>();
  const categoryId = route.params.categoryId;

  const Meals = useMemo(() => {
    return MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  }, [categoryId]);

  useLayoutEffect(() => {
    const currentCategory = CATEGORIES.find(
      (category) => category.id === categoryId
    );
    navigation.setOptions({
      title: currentCategory?.title,
      headerBackTitleVisible: false,
    });
  }, [categoryId, navigation]);

  const renderMeals = (meal: Meal) => {
    return (
      <MealItem
        title={meal.title}
        imageUrl={meal.imageUrl}
        affordability={meal.affordability}
        duration={meal.duration}
        complexity={meal.complexity}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={Meals}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item }) => renderMeals(item)}
      />
    </View>
  );
};
