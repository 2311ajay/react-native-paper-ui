import { StyleSheet, Switch, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { NotificationTab } from './myTabsScreens/NotificationScreen';
import { GalleryTab } from './myTabsScreens/GalleryScreen';


const Tab = createMaterialBottomTabNavigator();

const DummyTabComponent = () => {
    return (
        <View style={styles.container}>
            <Text>{'Tab'}</Text>
        </View>
    )
};

const DummyTabComponent2 = (text: string) => {
  return (
      <View style={styles.container}>
          <Text>{text}</Text>
      </View>
  )
}

export default function MyTabs (props: any) {

    const switchHook = React.useState<boolean>(true);
    const visibilityHook = React.useState(true);

    return (
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
        >
          <Tab.Screen
            name="Gallery"
            // component={DummyTabComponent} this is when the component does not need props
            children = {(p) => GalleryTab({...p, visibilityHook })}
            options={{
              tabBarLabel: 'Gallery',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="image" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            children = {(p) => NotificationTab({...p, switchHook })}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            children = {() => DummyTabComponent2('Profile')}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });