import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <Text>michalo-prog</Text>
      <Text>Counter: {counter}</Text>
      <Button
        title="Increase number"
        onPress={() => setCounter(counter + 1)}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
