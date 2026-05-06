import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';
import { FONT_SIZE } from '@/constants/typography';
import { SPACE } from '@/constants/spacing';

export interface IngredientRowProps {
  name: string;
  amount: number | null;
  unit: string | null;
}

export default function IngredientRow({ name, amount, unit }: IngredientRowProps): React.JSX.Element {
  const amountText = amount !== null ? `${amount}${unit ? ` ${unit}` : ''}` : '';

  return (
    <View style={styles.row}>
      <Text style={styles.amount}>{amountText}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: SPACE.MD,
    paddingVertical: SPACE.XS,
  },
  amount: {
    color: COLORS.AMBER,
    fontSize: FONT_SIZE.MD,
    fontWeight: '500',
    minWidth: 60,
  },
  name: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZE.MD,
    flex: 1,
  },
});
