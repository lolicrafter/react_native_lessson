import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {StyledView, StyledText} from '../NativeWindComponent';

const styles = StyleSheet.create({
  root: {
    // flexDirection: 'column',
  },
});

function ViewDemo() {
  const [viewHeight, setViewHeight] = React.useState(200);
  const viewRef = React.useRef(null);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setViewHeight(400);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [viewHeight]);

  const logHeight = () => {
    // viewRef.current?.setNativeProps({
    //   style: {
    //     height: 300,
    //     backgroundColor: 'red',
    //   },
    // });
    console.log(
      '--🚀🚀🚀🚀🚀------ViewDemo.tsx---注释所在行数14----😊viewHeight===》',
      viewHeight,
    );
  };

  return (
    <StyledView style={styles.root} className={'h-screen'}>
      <StyledView className={'w-screen mb-[20] h-[100] bg-lime-300'} />
      <StyledView className={'w-[100px] mb-[20] h-[100] h-[100] bg-gray-500'} />
      <StyledView className={'w-[100] mb-[20] h-[100] h-[100] bg-rose-300'} />
      <StyledView className={'flex mt-[30] flex-row h-[40] '}>
        <StyledView
          className={
            'flex justify-center items-center text-white bg-fuchsia-500 rounded basis-1/4'
          }>
          <StyledText className={'bg-lime-500'}>1</StyledText>
        </StyledView>

        {/*<Box className="basis-1/4">02</Box>*/}
        <StyledView
          className={
            'mx-[10] border border-amber-500 border-solid basis-1/4 bg-lime-300 flex justify-center items-center'
          }>
          <StyledText>2</StyledText>
        </StyledView>
        <StyledView
          className={' basis-1/4 bg-lime-300 flex justify-center items-center'}>
          <StyledText>3</StyledText>
        </StyledView>
        <StyledView
          className={
            ' basis-1/4 bg-yellow-600 flex justify-center items-center'
          }>
          <StyledText>4</StyledText>
        </StyledView>
      </StyledView>
      <StyledView
        ref={viewRef}
        className={'absolute left-[30] top-[100]  w-[100] bg-rose-300'}
        style={{height: viewHeight}}
        onLayout={e => {
          console.log(
            '--🚀🚀🚀🚀🚀------ViewDemo.tsx---注释所在行数44----😊===》',
            e.nativeEvent.layout,
          );
        }}>
        <TouchableHighlight onPress={logHeight}>
          <StyledText className={'text-2xl'}>Hello World</StyledText>
        </TouchableHighlight>
      </StyledView>
    </StyledView>
  );
}

export default ViewDemo;
