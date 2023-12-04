import { ParamListBase, RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Modal, Portal, ProgressBar, MD3Colors } from 'react-native-paper';

import { List, Text } from 'react-native-paper';


export const GalleryTab = (props: {
    route: RouteProp<ParamListBase, "Gallery">;
    navigation: any;
    modalVisibilityHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    uploadProgressHook: [number, React.Dispatch<React.SetStateAction<number>>]
    }) => {

        const [visible, setVisible] = props.modalVisibilityHook;
        const [progress, setProgress] = props.uploadProgressHook;

        const showModal = () => setVisible(true);
        const hideModal = () => {setVisible(false), setProgress(0)};
        const containerStyle = {backgroundColor: 'white', padding: 20};

        const uploadSimulator = () => {
            setProgress(0);
            delay(1, 0.1);
        }

        const sleep = (ms: number) => {
            return new Promise((resolve) => setTimeout(resolve, ms));
          };
          
        const delay = async (iterations: number, step: number) => {
              for (let i = 0; i < iterations; i+= step){
                //   console.log(`Round ${i}`);
                //   console.log('Waiting for 500ms');
                  await sleep(500);
                  setProgress(i);
                //   console.log('Posting');
              }
        };

        const LeftContent = (props: {
            size: number;
        }) => <Avatar.Icon {...props} icon="folder" />

        const cardItems: { id: number, source: string }[] = [...Array(10).keys()].map((key) => {
            return (
                {
                    id: +key,
                    source: 'https://picsum.photos/700' + key,
                }
            )
          });

    
        return (
            <ScrollView>
                    {/* <Text > Used to visualize the numerical progress of the simulated upload
                        {progress} seconds have elapsed since mounting.
                    </Text> */}
                  {
                    cardItems.map( (item) =>
                        <Card 
                            style={
                                {
                                    padding: 10, 
                                    marginVertical: 5
                                }
                            } 
                            key={item.id}
                        >
                            <Card.Title title={"Card Title " + item.id} subtitle="Card Subtitle" left={LeftContent} />
                            <Card.Content>
                            <Text variant="titleLarge">Card title</Text>
                            <Text variant="bodyMedium">Card content</Text>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions>
                                <Button>Cancel</Button>
                                <Button onPress={showModal}>Ok</Button>
                            </Card.Actions>
                        </Card>)
                    }
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style = {{margin: 20}}>
                    <Text>Example Modal. Click outside this area to dismiss.</Text>
                    <ProgressBar progress={progress} color={MD3Colors.neutral30} style={{marginVertical: 20}}/>
                    <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-end"
                          }}>
                        <Button onPress={hideModal}>Close</Button>
                        <Button onPress={uploadSimulator}>Upload</Button>
                    </View>
                </Modal>
            </Portal>
            </ScrollView>
        )
};