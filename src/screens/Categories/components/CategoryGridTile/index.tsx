import { Pressable, View, Text } from 'react-native';

interface CategoryGridTileProps {
  title: string;
  color: string;
}

export const CategoryGridTile = ({ title, color }: CategoryGridTileProps) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
