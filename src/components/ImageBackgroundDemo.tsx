import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  StyledImage,
  StyledImageBackground,
  StyledText,
  StyledView,
} from './NativeWindComponent';
import {imageUrl} from '../constants/Uri';

function ImageBackgroundDemo() {
  return (
    <SafeAreaView>
      <StyledView className={'h-screen w-screen bg-lime-300 p-[20px]'}>
        <StyledText className={'text-[24px] mb-10'}>
          ImageBackgroundDemo组件展示
        </StyledText>
        <StyledImageBackground
          className={'h-[300px] w-[300px]  flex justify-center items-center'}
          imageStyle={{borderRadius: 10, resizeMode: 'cover'}}
          source={{uri: imageUrl}}>
          <StyledText className={'text-[34px] text-yellow-500'}>
            {`我在\n`}里面
          </StyledText>
          <StyledImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/60030602?v=4',
            }}
            className={'w-[50] h-[50]'}
          />
        </StyledImageBackground>
      </StyledView>
    </SafeAreaView>
  );
}

export default ImageBackgroundDemo;
