import {RefreshControl, SafeAreaView, SectionList} from 'react-native';
import {StyledText, StyledView} from '../NativeWindComponent';
import {SectionData} from '../../constants/Data';
import {useRef, useState} from 'react';

const RenderItem = ({item}: {item: string}) => {
  return <StyledText className={'text-xl font-bold'}>{item}</StyledText>;
};
const SectionHeader = ({section}: {section: any}) => {
  return (
    <StyledText className={'text-xl font-bold bg-lime-300'}>
      {section.type}
    </StyledText>
  );
};
const SeparatorComponent = () => {
  return <StyledView className={'bg-gray-200 my-1 h-1 w-full'} />;
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

function SectionListDemo() {
  const sectionRef = useRef<SectionList<any> | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView style={{height: '100%'}}>
      <StyledText className={'text-2xl'}>SectionList</StyledText>
      <SectionList
        ref={sectionRef}
        style={{height: '100%'}}
        // sections={[]}
        sections={SectionData}
        renderItem={RenderItem}
        keyExtractor={item => item}
        contentContainerStyle={{padding: 20}}
        renderSectionHeader={SectionHeader}
        ItemSeparatorComponent={SeparatorComponent}
        ListEmptyComponent={EmptyComponent}
        stickySectionHeadersEnabled={true}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              console.log('onRefresh');
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 2000);
            }}
          />
        }
        onEndReached={() => {
          console.log('onEndReached');
          setRefreshing(true);
          setTimeout(() => {
            setRefreshing(false);
          }, 2000);
        }}
        onEndReachedThreshold={0.1}
        onTouchEnd={() => {
          sectionRef.current?.scrollToLocation({
            sectionIndex: 4,
            itemIndex: 1,
            // viewOffset: 0,
            viewPosition: 0,
            animated: true,
          });
        }}
      />
    </SafeAreaView>
  );
}

export default SectionListDemo;
