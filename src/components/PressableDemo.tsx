import {Pressable, SafeAreaView} from 'react-native';
import {StyledPressable, StyledText, StyledView} from './NativeWindComponent';

function PressableDemo() {
  return (
    <SafeAreaView>
      <StyledView className={'h-screen w-screen bg-lime-300 p-[20px]'}>
        <StyledText className={'text-4xl'}>Button Demo</StyledText>
        <Pressable
          style={({pressed}) => {
            return {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'orange',
            };
          }}
          onPress={() => {
            console.log('Pressed');
          }}>
          {({pressed}) => {
            return (
              <StyledText className={'text-2xl text-white'}>
                Pressable --pressed: {pressed.toString()}
              </StyledText>
            );
          }}
        </Pressable>
        <StyledPressable
          style={({pressed}) => {
            return {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'orange',
            };
          }}
          onPress={() => {
            console.log('Pressed');
          }}>
          {({pressed}) => {
            return (
              <StyledText className={'text-2xl text-white'}>
                Pressable --pressed: {pressed.toString()}
              </StyledText>
            );
          }}
        </StyledPressable>
      </StyledView>
    </SafeAreaView>
  );
}

export default PressableDemo;
