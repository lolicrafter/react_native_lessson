import {FlatList, StyleSheet} from 'react-native';
import {StyledText, StyledView} from '../NativeWindComponent';
import {useRef} from 'react';

const Header = () => {
  return (
    <StyledView className={'bg-white p-[10px] mb-[10px] w-full'}>
      <StyledText className={'text-[24px] font-bold text-rose-400'}>
        Header
      </StyledText>
    </StyledView>
  );
};
const Footer = () => {
  return (
    <StyledView className={'bg-white p-[10px] mt-[10px] w-full'}>
      <StyledText className={'text-[24px] font-bold text-rose-400'}>
        Footer
      </StyledText>
    </StyledView>
  );
};

const SeparatorComponent = () => {
  return <StyledView className={'bg-gray-200 h-1 w-full'} />;
};
const EmptyComponent = () => {
  return (
    <StyledView className={'bg-white p-[10px] w-full'}>
      <StyledText className={'text-[24px] font-bold text-rose-400'}>
        暂无内容
      </StyledText>
    </StyledView>
  );
};
const styles = StyleSheet.create({
  flatList: {
    height: '100%',
  },
  container: {padding: 20, backgroundColor: 'skyblue'},
});

function FlatListDemo() {
  const arr = Array.from({length: 40}, (v, i) => i + 1);

  const renderItem = ({item}: {item: any; index: number}) => {
    return (
      <StyledView className={'bg-white p-[10px] w-full'}>
        <StyledText className={'text-[24px] font-bold text-rose-400'}>
          {item}
        </StyledText>
      </StyledView>
    );
  };

  const FlagRef = useRef<FlatList<any> | null>(null);
  return (
    <StyledView className={'h-full'}>
      <StyledText className={'text-2xl mt-10 mb-10'}>FlatListDemo</StyledText>
      <FlatList
        style={styles.flatList}
        ref={FlagRef}
        contentContainerStyle={styles.container}
        data={arr}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={SeparatorComponent}
        ListEmptyComponent={EmptyComponent}
        // onViewableItemsChanged={info => {
        //   const {viewableItems, changed} = info;
        //   console.log(
        //     '--🚀🚀🚀🚀🚀------FlatListDemo.tsx---注释所在行数67----😊===》',
        //     viewableItems,
        //     changed,
        //   );
        // }}
        // numColumns={2}
        // inverted={true}
        // horizontal={true}
        // pagingEnabled={true}
        // scrollEnabled={true}
        onTouchEnd={() => {
          console.log('onTouchEnd');
          FlagRef.current?.scrollToIndex({
            index: 22,
            animated: true,
            viewPosition: 0.5,
          });
          // FlagRef.current?.scrollToOffset({offset: 0, animated: true});
        }}
        onScroll={event => {
          console.log('onScroll', event.nativeEvent.contentOffset.y);
        }}
      />
    </StyledView>
    // <FlatList
    //   ref={FlagRef}
    //   contentContainerStyle={{padding: 20, backgroundColor: 'skyblue'}}
    //   data={arr}
    //   renderItem={renderItem}
    //   keyExtractor={(item, index) => index.toString()}
    //   scrollEnabled={true}
    //   onTouchEnd={() => {
    //     console.log('onTouchEnd');
    //     FlagRef.current?.scrollToIndex({index: 0, animated: true});
    //   }}
    //   onScroll={event => {
    //     console.log('onScroll', event.nativeEvent.contentOffset.x);
    //   }}
    // />
  );
}

export default FlatListDemo;
