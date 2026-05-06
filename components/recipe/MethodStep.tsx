import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';
import { FONT_SIZE } from '@/constants/typography';
import { SPACE, RADIUS } from '@/constants/spacing';

export interface MethodStepProps {
  stepNumber: number;
  instruction: string;
}

export default function MethodStep({ stepNumber, instruction }: MethodStepProps): React.JSX.Element {
  return (
    <View style={styles.row}>
      <View style={styles.number}>
        <Text style={styles.numberText}>{stepNumber}</Text>
      </View>
      <Text style={styles.instruction}>{instruction}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: SPACE.MD,
    paddingVertical: SPACE.XS,
  },
  number: {
    width: 24,
    height: 24,
    borderRadius: RADIUS.SM,
    backgroundColor: COLORS.AMBER_DIM,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: 1,
  },
  numberText: {
    color: COLORS.AMBER,
    fontSize: FONT_SIZE.XS,
    fontWeight: '500',
  },
  instruction: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZE.MD,
    flex: 1,
    lineHeight: 22,
  },
});
