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

  return (
    <StyledSafeAreaView className=" ">
      <StyledView className=" ">
        <StyledText className="text-2xl">AnimeDemo</StyledText>
        <Button
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
          }}
        />
        <Button
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
          }}
        />
      </StyledView>
      {}
      <Animated.View
        style={[
          styles.animatedView,
          {
            marginLeft: marginLeft,
          } as any,
        ]}
      />
    </StyledSafeAreaView>
  );
}

export default AnimeDemo;
