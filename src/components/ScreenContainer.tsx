import * as React from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ScreenContainerProps {
  isFullscreen?: boolean;
}

const ScreenContainer: React.FC<ScreenContainerProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const renderStatusBar = React.useCallback(() => {
    return (
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    );
  }, [isDarkMode]);

  if (!!props.isFullscreen) {
    return (
      <View style={styles.container}>
        {renderStatusBar()}
        {props.children}
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderStatusBar()}
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ScreenContainer;
