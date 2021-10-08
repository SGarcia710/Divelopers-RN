import {ScreenContainer} from '@Divelopers/components';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Lato',
            fontWeight: '100',
          }}>
          HomeScreen
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
