import { StatusBar } from 'expo-status-bar';
import FloatingActionButton from '../components/FloatingActionButton';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import React from 'react';


export default function Home () {

    const [selectedValue, setSelectedValue] = React.useState('option1');
    const [radioVisibility, setRadioVisibility] = React.useState(false);
    
    return (
    <>
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
        <View>
      {radioVisibility && (
      <><Text>Choose an option:</Text><RadioButton.Group
                        onValueChange={(value) => setSelectedValue(value)}
                        value={selectedValue}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option1" color="blue" />
                            <Text>Option 1</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option2" color="red" />
                            <Text>Option 2</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option3" color="green" disabled />
                            <Text>Option 3 is disabled</Text>
                        </View>
                    </RadioButton.Group><Text>Selected Value: {selectedValue}</Text></>)
      
      }
    </View>
        <FloatingActionButton icon='plus' animated rippleColor='blue' onPress={() => setRadioVisibility(!radioVisibility)}/>
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