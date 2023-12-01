import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Drawer } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { FloatingActionButton } from './components/FloatingActionButton';
import { DrawerHeaderProps, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, ParamListBase, useNavigation } from '@react-navigation/native';
import Home from './Screens/home';
import MyTabs from './Screens/myTabs';

export default function App() {

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const Drawer = createDrawerNavigator<ParamListBase>();
  // const navigation = useNavigation();



  const CustomHeader = (props: DrawerHeaderProps) => {
    const _toggleDrawer = () => {
      props.navigation.toggleDrawer()
    };
    
    return (
      <>
        <Appbar.Header>
          {/* Icon list can be found in https://static.enapter.com/rn/icons/material-community.html */}
          <Appbar.Action icon="all-inclusive" onPress={_toggleDrawer}/>
          {/* <Appbar.BackAction onPress={_goBack} /> */}
          <Appbar.Content title="Title" />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
      </>
    )
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{header: CustomHeader}}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="MyTabs" component={MyTabs} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

