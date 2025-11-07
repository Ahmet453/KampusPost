import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './components/LoginScreen';

function App() {
  return (
    <View style={stiller.kapsayici}>
      <LoginScreen />
    </View>
  );
}

const stiller = StyleSheet.create({
  kapsayici: { flex: 1, backgroundColor: '#fff' },
});

export default App;
