import {Text, View, Button, StyleSheet, StyleProp} from 'react-native';
import {styled, StyledProps} from 'nativewind';

const Typography = {
  primary: 'yangrendong-Regular',
  thin: 'yangrendong-Light',
  extraLight: 'yangrendong-Light',
  light: 'yangrendong-Light',
  medium: 'yangrendong-Medium',
  semiBold: 'yangrendong-SemiBold',
  bold: 'yangrendong-Bold',
  extraBold: 'yangrendong-Bold',
  black: 'yangrendong-Bold',
};
const styles = StyleSheet.create({
  regular: {fontFamily: Typography.primary},
  thin: {fontFamily: Typography.thin},
  extraLight: {fontFamily: Typography.extraLight},
  light: {fontFamily: Typography.light},
  medium: {fontFamily: Typography.medium},
  semiBold: {fontFamily: Typography.semiBold},
  bold: {fontFamily: Typography.bold},
  extraBold: {fontFamily: Typography.extraBold},
  black: {fontFamily: Typography.black},
});
import type {ComponentProps} from 'react';
import {TextStyle as RNTextStyle} from 'react-native';

type TextProps = ComponentProps<typeof Text>;

const TextStyle = styled(Text) as React.ComponentType<StyledProps<TextProps>>;

export const StyledView = styled(View);

export const StyledText = ({style, ...props}: StyledProps<TextProps>) => {
  const styleArray = Array.isArray(style) ? style : [style];
  if (!style) {
    return <Text style={[...styleArray, styles.regular]} {...props} />;
  }

  const {fontWeight, ...rest} = StyleSheet.flatten(style);

  if (!fontWeight) {
    return <Text style={[...styleArray, styles.regular]} {...props} />;
  }

  let weightedFontFamily: StyleProp<RNTextStyle> | undefined;

  switch (fontWeight) {
    case '100':
      weightedFontFamily = styles.thin;
      break;
    case '200':
      weightedFontFamily = styles.extraLight;
      break;
    case '300':
      weightedFontFamily = styles.light;
      break;
    case '500':
      weightedFontFamily = styles.medium;
      break;
    case '600':
      weightedFontFamily = styles.semiBold;
      break;
    case 'bold':
    case '700':
      weightedFontFamily = styles.bold;
      break;
    case '800':
      weightedFontFamily = styles.extraBold;
      break;
    case '900':
      weightedFontFamily = styles.black;
      break;
    default:
      weightedFontFamily = styles.regular;
  }
  return <TextStyle style={[rest, weightedFontFamily]} {...props} />;
};
export const StyledButton = styled(Button);
