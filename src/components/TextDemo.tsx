import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyledText} from './NativeWindComponent';

function TextDemo() {
  return (
    <SafeAreaView>
      <StyledText
        numberOfLines={2}
        className={'text-[26px]   text-center text-red-500'}
        style={{
          fontFamily: 'xuandong',
        }}>
        Hello World! 你好，世界！ Hello World! 你好，世界！ Hello World!
        你好，世界！
      </StyledText>
      <StyledText className={'text-[26px] font-bold text-center text-red-500'}>
        Hello World! 你好，世界！
      </StyledText>
      <StyledText
        selectable={true}
        selectionColor={'skyblue'}
        style={{
          textAlignVertical: 'center',
        }}
        className={
          'mt-[20px] h-[80px] text-[26px] font-bold text-center text-red-500 bg-lime-300 underline decoration-zinc-200 decoration-solid capitalize'
        }>
        abc1234567890
        <StyledText
          className={'text-[36px] font-bold text-center text-blue-500]'}>
          哈哈
        </StyledText>
      </StyledText>
    </SafeAreaView>
  );
}

export default TextDemo;
