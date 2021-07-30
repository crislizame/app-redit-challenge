import React, { Component } from 'react';
import {View, TouchableOpacity, Appearance} from 'react-native'
import { VStack, FlatList, Text, HStack, Image, Center } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import moment from 'moment';

class Top extends Component {

    constructor(props) {
        super(props);
        this.state = {
            schemeColor: Appearance.getColorScheme(),
            data: props.route.params.mockData ? props.route.params.mockData : [],
            type: props.route.params.type,
            isLoading: true
        };
    }  
    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true;
        await this.getData();
    }
    async getData(){
        this.setState({
            isLoading: true
        })
        await fetch(`https://api.reddit.com/r/pics/${this.state.type}.json`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then(async (res) => {

            this.setState({
                data: res.data.children,
                isLoading: false
            });
        })
    }
    async componentWillUnmount() {
        this._isMounted =false;
    }
    render() {
        
        return (
            <VStack testID="top-screen" style={{backgroundColor: this.state.schemeColor === 'light' ? "white" : "black", flex:1, paddingVertical: hp(2), paddingHorizontal: wp(1) }}>
            <FlatList
                testID="flatlist"
                progressViewOffset={5}
                onRefresh={async ()=>{
                    await this.getData()
                }}
                refreshing={this.state.isLoading}
                data={this.state.data}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} style={{width:"100%"}} onPress={()=>{
                        this.props.navigation.navigate("WebViewPage",{
                            title:item.data.title,
                            url:`https://reddit.com${item.data.permalink}`
                        })
                    }} >
                        <HStack px={1} py={2} rounded="md" my={2} bg="coolGray.600">
                        <VStack px={2} style={{
                            width:"30%",
                            justifyContent:"center"
                        }}>
                            <Image
                            source={ !item.data.thumbnail || item.data.thumbnail == "nsfw" ? require('../../../../assets/icon.png') : {
                                uri: item.data.thumbnail,
                            }}
                            fallbackSource={require('../../../../assets/icon.png')}
                            alt="Image Reddit"
                            size={wp(20)}
                            style={{
                                resizeMode:"cover",
                                maxHeight: hp(15)
                            }}
                            />
                            
                        
                        </VStack>
                        <VStack style={{justifyContent:"space-between", width:"68%"}}>
                        <Text color="white" style={{textAlign:"right", fontSize:wp(3)}}>{moment.unix(item.data.created).fromNow()}</Text>
                        <Text color="white" style={{fontWeight:"bold", fontSize:wp(4)}}>{item.data.title}</Text>
                        <HStack style={{justifyContent:"space-between"}}>
                            <Center><Text  color="white" style={{fontSize:wp(3)}}>{((item.data.author).length > 12) ? (((item.data.author).substring(0,12-3)) + '...') : item.data.author}</Text></Center>
                            <Center py={1}><Text color="white" style={{fontSize:wp(3)}}><FontAwesome name="star" /> {item.data.score}</Text></Center>
                            <Center><Text color="white" style={{fontSize:wp(3)}}><FontAwesome name="comment" /> {item.data.num_comments}</Text></Center>
                        </HStack>
                        </VStack>
                    </HStack>
                    </TouchableOpacity>
                    
                )}
                keyExtractor={(item, index) => index.toString()}
                />
            </VStack>
        );
    }
}

export default Top
