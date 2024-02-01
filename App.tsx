/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  // SafeAreaView,
  // ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/modules/Home';
import {StyledSafeAreaView} from './src/components/NativeWindComponent';
import {useProxy} from 'valtio/utils';
import {osStore} from './src/stores';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// import ViewDemo from './src/components/ViewDemo';
// import TextDemo from './src/components/TextDemo';
// import ImageDemo from "./src/components/ImageDemo";
// import ImageBackgroundDemo from "./src/components/ImageBackgroundDemo";
// import TextInputDemo from './src/components/TextInputDemo';
// import TouchableOpacityDemo from './src/components/TouchableOpacityDemo';
// import ButtonDemo from './src/components/ButtonDemo';
// import PressableDemo from './src/components/Demo/PressableDemo';
// import ScrollViewDemo from './src/components/Demo/ScrollViewDemo';
// import FlatListDemo from './src/components/Demo/FlatListDemo';
// import SectionListDemo from './src/components/Demo/SectionListDemo';
// import ModalDemo from './src/components/Demo/ModalDemo';
// import SwitchDemo from './src/components/Demo/SwitchDemo';
// import TestApi from './src/components/Demo/TestApi';
// import AnimeDemo from './src/components/Demo/AnimeDemo';
// import AnimeModalDemo from './src/components/Demo/AnimeModalDemo';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {setOs} = useProxy(osStore);
  Platform.OS === 'ios' ? setOs('ios') : setOs('android');

  // useEffect(() => {
  //   const bool = Math.random() > 0.5;
  //   console.log('bool', bool);
  // }, []);

  return (
    <StyledSafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Home />
      {/*<FlatListDemo />*/}
      {/*<SectionListDemo />*/}
      {/*<ScrollViewDemo />*/}
      {/*<ModalDemo />*/}
      {/*<SwitchDemo />*/}
      {/*<TestApi />*/}
      {/*<AnimeDemo />*/}
      {/*<AnimeModalDemo />*/}

      {/*<ScrollView*/}
      {/*  contentInsetAdjustmentBehavior="automatic"*/}
      {/*  style={backgroundStyle}>*/}
      {/*<ViewDemo />*/}
      {/*<TextDemo />*/}
      {/*<ImageDemo />*/}
      {/*<ImageBackgroundDemo />*/}
      {/*<TextInputDemo />*/}
      {/*<TouchableOpacityDemo />*/}
      {/*<ButtonDemo />*/}
      {/*<PressableDemo />*/}
      {/*<Header />*/}
      {/*<View*/}
      {/*  style={{*/}
      {/*    backgroundColor: isDarkMode ? Colors.black : Colors.white,*/}
      {/*  }}>*/}
      {/*  <Section title="Step One">*/}
      {/*    Edit <Text style={styles.highlight}>App.tsx</Text> to change this*/}
      {/*    screen and then come back to see your edits.*/}
      {/*  </Section>*/}
      {/*  <Section title="See Your Changes">*/}
      {/*    <ReloadInstructions />*/}
      {/*  </Section>*/}
      {/*  <Section title="Debug">*/}
      {/*    <DebugInstructions />*/}
      {/*  </Section>*/}
      {/*  <Section title="Learn More">*/}
      {/*    Read the docs to discover what to do next:*/}
      {/*  </Section>*/}
      {/*  <LearnMoreLinks />*/}
      {/*</View>*/}
      {/*</ScrollView>*/}
    </StyledSafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
