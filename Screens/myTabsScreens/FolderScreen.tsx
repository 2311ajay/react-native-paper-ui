import { ParamListBase, RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Banner, Button, MD3Colors  } from 'react-native-paper';

import { List } from 'react-native-paper';


export const FolderTab = (props: {
    route: RouteProp<ParamListBase, "Folder">;
    navigation: any;
    expandedHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    }) => {


  const [expanded, setExpanded] = props.expandedHook;

  const handlePress = () => setExpanded(!expanded);

  const listItems: { id: number, title: string, description: string, starred: boolean }[] = [...Array(10).keys()].map((key) => {
    return (
        {
            id: +key,
            title: 'Title of ' + (key + 1),
            description: 'Some random description',
            starred: key % 3 === 0? true : false
        }
    )
  });

  return (
    <ScrollView>
          <List.Section>
            <List.Subheader>Some title</List.Subheader>
            {listItems.map((item) => {
                return(
                    <List.Item
                        key = {item.id.toString()}
                        title={item.title}
                        description={item.description}
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => 
                            <List.Icon 
                                {...props} 
                                color={item.starred? 'yellow' : props.color}
                                style = {{borderColor: 'black'}} 
                                icon={item.starred? 'star-face' : 'star-outline'} 
                                />}
                    />
                )
            })}
        </List.Section>
        <List.Section title="Accordions">
          <List.Accordion
            title="Uncontrolled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
    </ScrollView>
  );
};
