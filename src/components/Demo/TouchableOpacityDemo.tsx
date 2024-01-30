import {SafeAreaView} from 'react-native';
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../NativeWindComponent';

function TouchableOpacityDemo() {
  return (
    <SafeAreaView>
      <StyledView className={'h-screen w-screen bg-lime-300 p-[20px] '}>
        <StyledText className={'text-[24px] mb-10 font-bold'}>
          TouchableOpacityDemo组件展示
        </StyledText>
        <StyledTouchableOpacity
          onPress={() => {
            console.log('onPress');
          }}
          onLongPress={() => {
            console.log('onLongPress');
          }}
          delayLongPress={1000}
          onPressIn={() => {
            console.log('onPressIn');
          }}
          onPressOut={() => {
            console.log('onPressOut');
          }}
          activeOpacity={0.7}
          className={
            'bg-white p-[10px] rounded-[10px] text-[24px] font-bold text-rose-400 flex items-center justify-center h-[120px]  '
          }>
          <StyledText className={'text-[24px]'}>
            TouchableOpacityDemo
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </SafeAreaView>
  );
}

export default TouchableOpacityDemo;
