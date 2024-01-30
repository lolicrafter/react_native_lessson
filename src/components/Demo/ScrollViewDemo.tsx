import {Keyboard, SafeAreaView} from 'react-native';
import {
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledView,
} from '../NativeWindComponent';
import {useRef} from 'react';
import {Button} from '@rneui/base';

function ViewItem(props: any) {
  function getRandomRgbColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  const randomHexColor = getRandomRgbColor();

  return (
    <StyledView
      className={'h-[100px] flex justify-center items-center'}
      style={{
        backgroundColor: randomHexColor,
      }}>
      {props.children}
    </StyledView>
  );
}

function BuildView() {
  const arr = Array.from({length: 22}, (v, k) => k + 1);
  return (
    <StyledView className={'w-full'}>
      {arr.map((item, index) => {
        return (
          <ViewItem key={index}>
            <StyledText className={'text-white text-[20px]'}>{item}</StyledText>
          </ViewItem>
        );
      })}
    </StyledView>
  );
}

function ScrollViewDemo() {
  const ref = useRef(null);
  return (
    <SafeAreaView>
      <StyledScrollView
        ref={ref}
        keyboardDismissMode={'on-drag'}
        onScroll={event => {
          console.log(
            '--🚀🚀🚀🚀🚀------ScrollViewDemo.tsx---注释所在行数38----onScroll😊===》',
            event.nativeEvent.contentOffset.y,
          );
          Keyboard.dismiss();
        }}
        // horizontal={true}
        // pagingEnabled={true}

        stickyHeaderIndices={[1]}
        contentContainerStyle={{
          backgroundColor: 'skyblue',
          display: 'flex',
          padding: 20,
          // boxSizing: 'border-box',
        }}>
        <StyledTextInput
          className={
            'bg-white p-[10px] rounded-[10px] mb-10 text-[16px] font-bold text-rose-400 '
          }
        />
        <Button
          buttonStyle={{backgroundColor: 'red', width: 100}}
          onPress={() => {
            // ref.current
            //   ? ref.current.scrollTo({x: 0, y: 330, animated: true})
            //   : undefined;
          }}>
          Button
        </Button>
        {BuildView()}

        {/*{arr.map((item, index) => {*/}
        {/*  return (*/}
        {/*    <StyledView key={index} className={'w-[400px] h-[300]'}>*/}
        {/*      <StyledText className={'text-white text-[20px]'}>*/}
        {/*        {item}*/}
        {/*      </StyledText>*/}
        {/*    </StyledView>*/}
        {/*  );*/}
        {/*})}*/}
      </StyledScrollView>
    </SafeAreaView>
  );
}

export default ScrollViewDemo;
