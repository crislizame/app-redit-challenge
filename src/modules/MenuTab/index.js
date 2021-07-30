import React, { Component } from 'react';
import {View, TouchableOpacity, Appearance} from 'react-native'
import styles from './styles/styleIndex';
import { VStack } from "native-base";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Top from './components/Top';
import TabBarMenu from '../../component/TabBarMenu';

const Tab = createMaterialTopTabNavigator();

class MenuTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            schemeColor: Appearance.getColorScheme()
        };
        
    }
    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true
    }

    async componentWillUnmount() {
        this._isMounted =false
    }
    render() {
        
        return (
            <VStack style={{backgroundColor: this.state.schemeColor === 'light' ? "white" : "black", flex:1, paddingVertical: hp(2), paddingHorizontal: wp(2) }}>
                <Tab.Navigator initialRouteName="Top" tabBar={props => <TabBarMenu {...props} />}>
                    <Tab.Screen data-testid="top-bar-button" initialParams={{
                        type:"top"
                    }} options={{ title: 'Top',
                    tabBarTestID:"top-bar-button" }} name="Top" component={Top} />
                    <Tab.Screen data-testid="new-bar-button"  initialParams={{
                        type:"new"
                    }} options={{ title: 'New',
                    tabBarTestID:"new-bar-button"  }} name="New" component={Top} />
                    <Tab.Screen data-testid="hot-bar-button"  initialParams={{
                        type:"hot"
                    }} options={{ title: 'Hot',
                    tabBarTestID:"hot-bar-button"  }} name="Hot" component={Top} />
                </Tab.Navigator>
            </VStack>
        );
    }
}

export default MenuTab
