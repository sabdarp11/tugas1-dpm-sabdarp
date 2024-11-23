import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>sabda rp</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'darkblue', 
  },
  box2: {
    backgroundColor: 'purple', 
  },
});

export default App;
