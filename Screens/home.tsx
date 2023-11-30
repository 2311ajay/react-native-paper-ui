import { StatusBar } from 'expo-status-bar';
import FloatingActionButton from '../components/FloatingActionButton';
import { StyleSheet, Text, View } from 'react-native';

export default function Home () {
    return (
    <>
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
        <FloatingActionButton icon='plus' animated rippleColor='blue' />
    </>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });