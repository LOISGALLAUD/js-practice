import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  var name = "Loïs";
  var intro = "\nmy name is " + name;
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button 
        title="Login" 
        onPress={() => console.log('Hello, world!')} 
        />
      </View>
      <Text style={styles.paragraph}>
        Hello world, {intro}
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#123456',
    padding: 8,
  },
  paragraph: {
    color: "#fff",
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: "#123",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    fontStyle: "bold",
  }
});
