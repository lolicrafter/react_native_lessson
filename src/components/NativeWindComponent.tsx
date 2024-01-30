import {
  Text,
  View,
  Button,
  StyleSheet,
  StyleProp,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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
type TextInputProps = ComponentProps<typeof TextInput>;

function processStyle(style: StyleProp<RNTextStyle>) {
  // const styleArray = Array.isArray(style) ? style : [style];
  let weightedFontFamily: StyleProp<RNTextStyle> | undefined;

  if (style) {
    const {fontWeight, ...rest} = StyleSheet.flatten(style);
    if (fontWeight) {
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
    } else {
      weightedFontFamily = styles.regular;
    }
    return {rest, weightedFontFamily};
  } else {
    return {rest: {}, weightedFontFamily: styles.regular};
  }
}

export const StyledView = styled(View);
export const StyledImage = styled(Image);
export const StyledImageBackground = styled(ImageBackground);
export const StyledTouchableOpacity = styled(TouchableOpacity);
export const StyledText = ({style, ...props}: StyledProps<TextProps>) => {
  const {rest, weightedFontFamily} = processStyle(style);
  return <Text style={[rest, weightedFontFamily]} {...props} />;
};
export const StyledTextInput = ({
  style,
  ...props
}: StyledProps<TextInputProps>) => {
  const {rest, weightedFontFamily} = processStyle(style);
  return <TextInput style={[rest, weightedFontFamily]} {...props} />;
};

export const StyledButton = styled(Button);
