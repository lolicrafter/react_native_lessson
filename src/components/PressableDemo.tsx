import {Pressable, SafeAreaView} from 'react-native';
import {StyledPressable, StyledText, StyledView} from './NativeWindComponent';
import {Button} from '@rneui/themed';

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
              <StyledText
                className={`text-2xl text-white text-center ${
                  pressed ? 'bg-sky-500-300' : 'bg-rose-500'
                }`}>
                Pressable --pressed: {pressed.toString()}
              </StyledText>
            );
          }}
        </StyledPressable>
        <Button
          title="Button"
          buttonStyle={{
            width: 100,
            height: 50,
          }}
          // containerStyle={{
          //   width: 100,
          //   height: 50,
          //   margin: 10,
          // }}
          color="success"
          radius="15"
          onPress={() => console.log('Button pressed')}
        />
      </StyledView>
    </SafeAreaView>
  );
}

export default PressableDemo;
