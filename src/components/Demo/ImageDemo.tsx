import React from 'react';
import {StyledImage, StyledText, StyledView} from '../NativeWindComponent';

import icon from '../../assets/icon.png';
import {imageUrl} from '../../constants/Uri';

function ImageDemo() {
  return (
    <StyledView className={'h-screen w-screen bg-lime-300 p-[20px]'}>
      <StyledText className={'text-[14px]'}>ImageDemo组件展示</StyledText>
      <StyledImage source={icon} className={'h-[200px] w-[200px]'} />
      <StyledImage
        source={{uri: imageUrl}}
        fadeDuration={200}
        defaultSource={icon}
        blurRadius={5}
        resizeMode={'cover'}
        className={'h-[200px] w-[200px]'}
        onLoad={event => {
          console.log('onLoad11', event.nativeEvent.source);
        }}
        // tintColor={'#ffffff'}
      />
    </StyledView>
  );
}

export default ImageDemo;
