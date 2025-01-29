import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = 'black';

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}