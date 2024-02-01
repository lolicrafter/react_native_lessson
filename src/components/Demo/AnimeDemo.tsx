import {
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../NativeWindComponent';
import {Button} from '@rneui/themed';
import {Animated, Easing, StyleSheet} from 'react-native';
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
  // const marginLeft = useRef(new Animated.Value(30)).current;
  const vector = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  ).current;
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
        <StyledText className="text-2xl font-bold">AnimeDemo</StyledText>
        <Button
          titleStyle={{fontFamily: 'xuandong', fontWeight: 'bold'}}
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
            const moveXY = Animated.timing(vector, {
              toValue: {x: 300, y: 400},
              duration: 500,
              useNativeDriver: false,
              easing: Easing.in(Easing.bounce),
            });
            const scaleChange = Animated.timing(scale, {
              toValue: 1.5,
              duration: 500,
              useNativeDriver: false,
            });
            const rotateChange = Animated.timing(rotate, {
              toValue: 360,
              duration: 1500,
              useNativeDriver: false,
            });
            // Animated.parallel([moveXY, scaleChange]).start();
            // Animated.sequence([moveXY, scaleChange]).start();
            // Animated.stagger(1500, [moveXY, scaleChange]).start();
            Animated.sequence([
              moveXY,
              Animated.delay(300),
              rotateChange,
              Animated.delay(600),
              scaleChange,
            ]).start();
            // Animated.timing(marginLeft, {
            //   toValue: 250,
            //   duration: 500,
            //   useNativeDriver: false,
            //   easing: Easing.in(Easing.bounce),
            // }).start();

            // Animated.decay(marginLeft, {
            //   velocity: 0.7,
            //   deceleration: 0.997,
            //   useNativeDriver: false,
            // }).start();
            // Animated.spring(marginLeft, {
            //   toValue: 200,
            //   // bounciness: 20,
            //   // speed: 1,
            //   tension: 130,
            //   friction: 1,
            //   // stiffness: 150,
            //   // damping: 5,
            //   // mass: 1,
            //   // overshootClamping: true,
            //   useNativeDriver: false,
            // }).start();

            // Animated.timing(marginLeft, {
            //   toValue: 200,
            //   duration: 1000,
            //   useNativeDriver: false,
            // }).start();
            // Animated.timing(rotate, {
            //   toValue: 360,
            //   duration: 1000,
            //   useNativeDriver: false,
            // }).start();
            // Animated.timing(scale, {
            //   toValue: 2,
            //   duration: 1000,
            //   useNativeDriver: false,
            // }).start();
            // Animated.timing(opacity, {
            //   toValue: 0.1,
            //   duration: 1000,
            //   useNativeDriver: false,
            // }).start();
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
            const moveXY = Animated.timing(vector, {
              toValue: {x: 20, y: 300},
              duration: 500,
              useNativeDriver: false,
              easing: Easing.in(Easing.bounce),
            });
            const scaleChange = Animated.timing(scale, {
              toValue: 1,
              duration: 500,
              useNativeDriver: false,
            });
            const rotateChange = Animated.timing(rotate, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: false,
            });
            Animated.parallel([moveXY, scaleChange, rotateChange]).start();
            // Animated.timing(vector, {
            //   toValue: {x: 0, y: 100},
            //   duration: 1000,
            //   useNativeDriver: false,
            // }).start();
            // Animated.timing(marginLeft, {
            //   toValue: 0,
            //   duration: 1000,
            //   useNativeDriver: false,
            // }).start();
            // Animated.timing(rotate, {
            //   toValue: 0,
            //   duration: 1000,
            //   useNativeDriver: false,
            // }).start();
            // Animated.timing(scale, {
            //   toValue: 1,
            //   duration: 1000,
            //   useNativeDriver: false,
            // }).start();
            // Animated.timing(opacity, {
            //   toValue: 1,
            //   duration: 1000,
            //   useNativeDriver: false,
            // }).start();
          }}
        />
      </StyledView>
      {}
      <Animated.View
        style={[
          styles.animatedView,
          {
            marginLeft: vector.x,
            marginTop: vector.y,
            transform: [{rotate: rotateValue}, {scale: scale}],
            opacity: opacity,
          } as any,
        ]}
      />
    </StyledSafeAreaView>
  );
}

export default AnimeDemo;
