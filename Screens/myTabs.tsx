import { StyleSheet, Text, View } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    return (
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
        >
          <Tab.Screen
            name="Feed"
            // component={DummyTabComponent} this is when the component does not need props
            children = {() => DummyTabComponent2('Feed')}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            children = {() => DummyTabComponent2('Notifications')}
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