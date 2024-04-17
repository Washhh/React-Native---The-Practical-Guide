import { FlatList } from 'react-native';
import { CATEGORIES } from '../../../data/dummy-data';
import Category from '../../../models/category';
import { CategoryGridTile } from './components/CategoryGridTile';

const renderCategory = (category: Category) => {
  return <CategoryGridTile title={category.title} color={category.color} />;
};

export const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => renderCategory(item)}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Categories;
