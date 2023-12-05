import { Icon, PaperProvider, Button, Menu, Divider, } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { DrawerHeaderProps, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import Home from './Screens/home';
import MyTabs from './Screens/myTabs';
import TableOfData from './Screens/DataTable';
import * as React from 'react';


export default function App() {

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleOptions = () => {
    console.log('Shown more');
    setMenuVisibility(true);
    console.log('Menu visible');
  };

  const [menuVisible, setMenuVisibility] = React.useState(false);

  const openMenu = () => setMenuVisibility(true);

  const closeMenu = () => setMenuVisibility(false);

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
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon="dots-vertical" onPress={_handleOptions} />}
            style={{
              borderRadius: 30,
              overflow: 'hidden'
            }}
            >
            <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
            <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
            <Divider />
            <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Cut" disabled />
            <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Copy" disabled />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
            <Divider />
            <Menu.Item trailingIcon="share-outline" onPress={() => {}} title="Share" />
          </Menu>
        </Appbar.Header>
      </>
    )
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="My Tabs" screenOptions={{header: CustomHeader}}>
          <Drawer.Screen name="Home" component={Home} options={
              {
                drawerIcon: (props) => (
                  <Icon 
                    source="home-outline"
                    size={20}/>
                )
              }
            }/>
          <Drawer.Screen name="My Tabs" component={MyTabs} options={
              {
                drawerIcon: (props) => (
                  <Icon 
                    source="reorder-horizontal"
                    size={20}/>
                )
              }
            }/>
          <Drawer.Screen 
            name="Table Of Data" 
            component={TableOfData} 
            options={
              {
                drawerIcon: (props) => (
                  <Icon 
                    source="file-table-box-outline"
                    size={20}/>
                )
              }
            }/>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

