import { ParamListBase, RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Banner, Button, Text, TextInput } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';


export const ProfileTab = (props: {
    route: RouteProp<ParamListBase, "Profile">;
    navigation: any;
    visibilityHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    passwordVisibilityHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    segmentedButtonHook: [string, React.Dispatch<React.SetStateAction<string>>];
    passwordHook: [string, React.Dispatch<React.SetStateAction<string>>];
    }) => {

  const [visible, setVisible] = props.visibilityHook;
  const [value, setValue] = props.segmentedButtonHook;
  const [password, setPassword] = props.passwordHook;
  const [passwordVisibility, setPasswordVisibility] = props.passwordVisibilityHook;


  return (
    <View style= {{flex: 1}}>
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
        <View style= {{margin: 10}}>
            <TextInput
                label="Password"
                secureTextEntry = {!passwordVisibility}
                right={
                    (passwordVisibility) ? 
                        (<TextInput.Icon 
                            icon="eye"
                            onPressIn={() => setPasswordVisibility(true)} 
                            onPressOut={() => setPasswordVisibility(false)}
                            />) :

                        (<TextInput.Icon 
                            icon="eye-off"
                            onPressIn={() => setPasswordVisibility(true)} 
                            onPressOut={() => setPasswordVisibility(false)}
                        />)     
                    }
                value={password}
                onChangeText={pw => setPassword(pw)}
            />
            
            <TextInput
                mode="outlined"
                label="Outlined input"
                placeholder="Type something and see the /100 on the right"
                right={<TextInput.Affix text="/100" />}
            />
        </View>
        <ScrollView style= {{margin: 10, backgroundColor: 'lavender'}}>
            <Text variant="displayLarge">Display Large</Text>
            <Text variant="displayMedium">Display Medium</Text>
            <Text variant="displaySmall">Display small</Text>

            <Text variant="headlineLarge">Headline Large</Text>
            <Text variant="headlineMedium">Headline Medium</Text>
            <Text variant="headlineSmall">Headline Small</Text>

            <Text variant="titleLarge">Title Large</Text>
            <Text variant="titleMedium">Title Medium</Text>
            <Text variant="titleSmall">Title Small</Text>

            <Text variant="bodyLarge">Body Large</Text>
            <Text variant="bodyMedium">Body Medium</Text>
            <Text variant="bodySmall">Body Small</Text>

            <Text variant="labelLarge">Label Large</Text>
            <Text variant="labelMedium">Label Medium</Text>
            <Text variant="labelSmall">Label Small</Text>
        </ScrollView>
    </View>
  );
};
