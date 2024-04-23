import { FlatList, SafeAreaView } from "react-native";
import { CATEGORIES } from "../../../data/dummy-data";
import Category from "../../../models/category";
import { CategoryGridTile } from "./components/CategoryGridTile";
import { StatusBar } from "expo-status-bar";

const renderCategory = (category: Category) => {
  return <CategoryGridTile title={category.title} color={category.color} />;
};

export const Categories = () => {
  return (
    <SafeAreaView>
      <StatusBar style="light"/>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => renderCategory(item)}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Categories;
