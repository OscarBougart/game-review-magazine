import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';
import { FONT_SIZE } from '@/constants/typography';
import { SPACE, RADIUS } from '@/constants/spacing';

export interface ShiftNoteCardProps {
  content: string;
  createdAt: number;
}

export default function ShiftNoteCard({ content, createdAt }: ShiftNoteCardProps): React.JSX.Element {
  const time = new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={styles.card}>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.BG_CARD,
    borderRadius: RADIUS.MD,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    padding: SPACE.LG,
    gap: SPACE.XS,
  },
  content: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZE.MD,
    lineHeight: 22,
  },
  time: {
    color: COLORS.TEXT_MUTED,
    fontSize: FONT_SIZE.XS,
  },
});
