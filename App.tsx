import React from 'react';
import {View, Text, SafeAreaView, Alert, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

function App() {
  const showAlert = () => {
    Alert.alert('Hello', 'Hello Ashraf');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Hello World!</Text>
        <Button
          title="Click Me"
          onPress={showAlert}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
