import {
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../NativeWindComponent';
import {Button} from '@rneui/themed';
import {Animated, StyleSheet} from 'react-native';
import {useRef} from 'react';

const styles = StyleSheet.create({
  animatedView: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginTop: 20,
  },
});

function AnimeDemo() {
  const marginLeft = useRef(new Animated.Value(30)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const rotateValue = rotate.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  return (
    <StyledSafeAreaView className=" ">
      <StyledView className=" ">
        <StyledText className="text-2xl">AnimeDemo</StyledText>
        <Button
          containerStyle={{margin: 20}}
          buttonStyle={{
            backgroundColor: 'red',
            borderRadius: 10,
            padding: 10,
            width: 150,
            height: 45,
          }}
          title="AnimeDemo"
          onPress={() => {
            Animated.timing(marginLeft, {
              toValue: 200,
              duration: 1000,
              useNativeDriver: false,
            }).start();
            Animated.timing(rotate, {
              toValue: 360,
              duration: 1000,
              useNativeDriver: false,
            }).start();
            Animated.timing(scale, {
              toValue: 2,
              duration: 1000,
              useNativeDriver: false,
            }).start();
            Animated.timing(opacity, {
              toValue: 0.1,
              duration: 1000,
              useNativeDriver: false,
            }).start();
          }}
        />
        <Button
          containerStyle={{margin: 20}}
          buttonStyle={{
            backgroundColor: 'blue',
            borderRadius: 10,
            padding: 10,
            width: 150,
            height: 45,
          }}
          title="AnimeDemo2"
          onPress={() => {
            Animated.timing(marginLeft, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: false,
            }).start();
            Animated.timing(rotate, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: false,
            }).start();
            Animated.timing(scale, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: false,
            }).start();
            Animated.timing(opacity, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: false,
            }).start();
          }}
        />
      </StyledView>
      {}
      <Animated.View
        style={[
          styles.animatedView,
          {
            marginLeft: marginLeft,
            transform: [{rotate: rotateValue}, {scale: scale}],
            opacity: opacity,
          } as any,
        ]}
      />
    </StyledSafeAreaView>
  );
}

export default AnimeDemo;
