import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Login from './Login';
import Menu from './Menu';
import AboutUsScreen from './About';
import Setting  from './Settings';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppHeader />
          <Drawer.Navigator initialRouteName='Login' screenOptions={{headerStyle: {backgroundColor: 'lightyellow'}}}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Menu" component={Menu} />
            <Drawer.Screen name="About us" component={AboutUsScreen}/>
            <Drawer.Screen name="Setting" component={Setting}/>
            
          </Drawer.Navigator>
        <AppFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  menuHeader: {
    textAlign: 'center',
    margin: 12,
    fontSize: 24,
    color: 'navy',
  },
  menuItem: {
    textAlign: 'center',
    margin: 12,
    fontSize: 24,
    color: 'maroon'
  },
  showMenuText: {
    fontSize: 18,
    color: 'navy',
    textAlign: 'center',
  },
  introText: {
    fontSize: 22,
    textAlign: 'center',
  }
});
