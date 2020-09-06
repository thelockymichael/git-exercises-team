import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

export default function App() {
  const [counter, setCounter] = useState({
    top: 0,
    bottom: 0,
  })
  console.log({...counter})

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <Text>michalo-prog</Text>
      <Text>Counter Top: {counter.top}</Text>
      <Text>Counter Bottom: {counter.bottom}</Text>

      <Button
        title="Increase top number"
        onPress={() => setCounter({
          ...counter,
          top: counter.top + 1,
        })}
      />
      <Button
        title="Increase bottom number"
        onPress={() => setCounter({
          ...counter,
          bottom: counter.bottom + 1,
        })}
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
