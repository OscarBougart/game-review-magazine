import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/colors';
import { FONT_SIZE } from '@/constants/typography';
import { SPACE, RADIUS } from '@/constants/spacing';

export interface HouseNoteProps {
  note: string;
}

export default function HouseNote({ note }: HouseNoteProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={16} color={COLORS.AMBER} />
      <Text style={styles.text}>{note}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACE.SM,
    backgroundColor: COLORS.AMBER_DIM,
    borderRadius: RADIUS.MD,
    padding: SPACE.MD,
    alignItems: 'flex-start',
  },
  text: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZE.SM,
    flex: 1,
    lineHeight: 20,
  },
});
