import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import MenuTab from './modules/MenuTab';
import WebViewPage from './modules/WebViewPage';


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MenuTab">
            <Stack.Screen options={{ title: 'reddit/r/pics' }} name="MenuTab" component={MenuTab} />
            <Stack.Screen name="WebViewPage" component={WebViewPage} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;