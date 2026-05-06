import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { COLORS } from '@/constants/colors';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants/typography';
import { SPACE } from '@/constants/spacing';

export default function RecipeDetailScreen(): React.JSX.Element {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Detail</Text>
      <Text style={styles.meta}>ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_PRIMARY,
    paddingHorizontal: SPACE.LG,
    paddingTop: SPACE.XL,
  },
  title: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.BOLD,
    marginBottom: SPACE.XS,
  },
  meta: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: FONT_SIZE.SM,
  },
});
