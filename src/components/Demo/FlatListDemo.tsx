import {FlatList} from 'react-native';
import {StyledText, StyledView} from '../NativeWindComponent';
import {useRef} from 'react';

function FlatListDemo() {
  const arr = Array.from({length: 20}, (v, i) => i + 1);

  const renderItem = ({item}: {item: any; index: number}) => {
    return (
      <StyledView className={'bg-white p-[10px] mb-[10px] w-screen'}>
        <StyledText className={'text-[24px] font-bold text-rose-400'}>
          {item}
        </StyledText>
      </StyledView>
    );
  };

  const FlagRef = useRef(null);
  return (
    // <StyledView className={'min-h-full'}>
    //   <StyledText className={'text-2xl mt-10 mb-10'}>FlatListDemo</StyledText>
    //   <FlatList
    //     style={{height: '100%'}}
    //     ref={FlagRef}
    //     contentContainerStyle={{padding: 20, backgroundColor: 'skyblue'}}
    //     data={arr}
    //     renderItem={renderItem}
    //     keyExtractor={(item, index) => index.toString()}
    //     scrollEnabled={true}
    //     onTouchEnd={() => {
    //       console.log('onTouchEnd');
    //       FlagRef.current?.scrollToIndex({index: 0, animated: true});
    //     }}
    //     onScroll={event => {
    //       console.log('onScroll', event.nativeEvent.contentOffset.x);
    //     }}
    //   />
    // </StyledView>
    <FlatList
      // styles={styles.flatlist}
      ref={FlagRef}
      contentContainerStyle={{padding: 20, backgroundColor: 'skyblue'}}
      data={arr}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={true}
      onTouchEnd={() => {
        console.log('onTouchEnd');
        FlagRef.current?.scrollToIndex({index: 0, animated: true});
      }}
      onScroll={event => {
        console.log('onScroll', event.nativeEvent.contentOffset.x);
      }}
    />
  );
}

export default FlatListDemo;
