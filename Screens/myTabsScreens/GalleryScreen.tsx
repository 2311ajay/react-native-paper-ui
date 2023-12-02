import { ParamListBase, RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Banner, Button, Card, MD3Colors  } from 'react-native-paper';

import { List, Text } from 'react-native-paper';


export const GalleryTab = (props: {
    route: RouteProp<ParamListBase, "Gallery">;
    navigation: any;
    // expandedHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    }) => {

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
                                <Button>Ok</Button>
                            </Card.Actions>
                        </Card>)
                    }
            </ScrollView>
        )
};