import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
        <Button title='Login' onPress={()=>{console.log('Logged in');
        }}/>
      </View>
    </SafeAreaView>
  );
};

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
