import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { COLORS } from '@/constants/colors';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants/typography';
import { SPACE, RADIUS } from '@/constants/spacing';
import Badge from '@/components/ui/Badge';

export interface RecipeCardProps {
  id: string;
  name: string;
  category: string | null;
  baseSpirit: string | null;
  method: string | null;
  isFavourite: boolean;
  onPress: (id: string) => void;
  onFavouriteToggle: (id: string) => void;
}

export default function RecipeCard({
  id,
  name,
  category,
  baseSpirit,
  method,
  isFavourite,
  onPress,
  onFavouriteToggle,
}: RecipeCardProps): React.JSX.Element {
  const handleFavourite = (): void => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onFavouriteToggle(id);
  };

  return (
    <Pressable
      onPress={() => onPress(id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      accessibilityLabel={`View recipe: ${name}`}
      accessibilityRole="button"
    >
      <View style={styles.header}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Pressable
          onPress={handleFavourite}
          hitSlop={12}
          accessibilityLabel={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          accessibilityRole="button"
        >
          <Ionicons
            name={isFavourite ? 'star' : 'star-outline'}
            size={20}
            color={isFavourite ? COLORS.AMBER : COLORS.TEXT_MUTED}
          />
        </Pressable>
      </View>
      <View style={styles.tags}>
        {baseSpirit ? <Badge label={baseSpirit} /> : null}
        {method ? <Badge label={method} /> : null}
        {category ? <Badge label={category} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.BG_CARD,
    borderRadius: RADIUS.MD,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    padding: SPACE.LG,
    gap: SPACE.SM,
  },
  pressed: {
    opacity: 0.75,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACE.SM,
  },
  name: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZE.LG,
    fontWeight: FONT_WEIGHT.BOLD,
    flex: 1,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACE.XS,
  },
});
