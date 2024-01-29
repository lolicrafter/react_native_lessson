import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyledText} from './NativeWindComponent';

function TextDemo() {
  return (
    <SafeAreaView>
      {/*<StyledText*/}
      {/*  numberOfLines={2}*/}
      {/*  className={'text-[26px]   text-center text-red-500'}*/}
      {/*  style={{*/}
      {/*    fontFamily: 'xuandong',*/}
      {/*  }}>*/}
      {/*  Hello World! 你好，世界！ Hello World! 你好，世界！ Hello World!*/}
      {/*  你好，世界！*/}
      {/*</StyledText>*/}
      {/*<StyledText className={'text-[26px] font-bold text-center text-red-500'}>*/}
      {/*  Hello World! 你好，世界！*/}
      {/*</StyledText>*/}
      {/*<StyledText*/}
      {/*  selectable={true}*/}
      {/*  selectionColor={'skyblue'}*/}
      {/*  style={{*/}
      {/*    textAlignVertical: 'center',*/}
      {/*  }}*/}
      {/*  className={*/}
      {/*    'mt-[20px] h-[80px] text-[26px] font-bold text-center text-red-500 bg-lime-300 underline decoration-zinc-200 decoration-solid capitalize'*/}
      {/*  }>*/}
      {/*  abc1234567890*/}
      {/*  <StyledText*/}
      {/*    className={'text-[36px] font-bold text-center text-blue-500'}>*/}
      {/*    哈哈*/}
      {/*  </StyledText>*/}
      {/*</StyledText>*/}
      <StyledText className={'text-[26px]'}>先帝使用字体系列实用程1</StyledText>
      <StyledText className={'text-[26px]'}>先帝使用字体系列实用程2</StyledText>
      <StyledText className={'text-[26px] font-bold'}>
        先帝使用字体系列实用程3
      </StyledText>
      <StyledText className={'text-[26px] font-[700]'}>
        先帝使用字体系列实用程4
      </StyledText>
    </SafeAreaView>
  );
}

export default TextDemo;
