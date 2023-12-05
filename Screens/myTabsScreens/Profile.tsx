import { ParamListBase, RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { Image, View } from 'react-native';
import { Banner, Button } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';


export const ProfileTab = (props: {
    route: RouteProp<ParamListBase, "Profile">;
    navigation: any;
    visibilityHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    segmentedButtonHook: [string, React.Dispatch<React.SetStateAction<string>>];
    }) => {

  const [visible, setVisible] = props.visibilityHook;
  const [value, setValue] = props.segmentedButtonHook;

  return (
    <View>
        <Banner
        visible={visible}
        actions={[
            {
            label: 'Fix it',
            onPress: () => setVisible(false),
            },
            {
            label: 'Learn more',
            onPress: () => setVisible(false),
            },
        ]}
        icon={({size}) => (
            <Image
            source={{
                uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
                width: size,
                height: size,
            }}
            />
        )}>
        There was a problem processing a transaction on your credit card.
        </Banner>
        <Button onPress={() => {console.log("Show banner"); setVisible(true)}}>
            Show banner
        </Button>
        <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
            {
                value: 'walk',
                label: 'Walking',
                icon: 'walk'
            },
            {
                value: 'train',
                label: 'Transit',
                icon:'train'
            },
            { value: 'drive', label: 'Driving', icon: 'car-back' },
            ]}
        />
    </View>
  );
};
