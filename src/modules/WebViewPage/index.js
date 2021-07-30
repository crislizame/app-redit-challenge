import React, { Component } from 'react';
import {Appearance} from 'react-native'
import { VStack } from "native-base";

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';

class WebViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            schemeColor: Appearance.getColorScheme(),
            title: props.route.params.title,
            url: props.route.params.url,
        };
        

    }
    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true
        this.props.navigation.setOptions({ title: this.state.title })
    }

    async componentWillUnmount() {
        this._isMounted =false
    }
    render() {
        
        return (
            <VStack style={{backgroundColor: this.state.schemeColor === 'light' ? "white" : "black", flex:1 }}>
                <WebView testID="webView" 
                    source={{ uri:this.state.url }}
                    />
            </VStack>
        );
    }
}

export default WebViewPage
