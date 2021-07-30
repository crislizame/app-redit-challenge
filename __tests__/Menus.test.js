import React from 'react';
import { render } from '@testing-library/react-native'
import MockedNavigator from "../mocks/MockedNavigator";
import Top from '../src/modules/MenuTab/components/Top';
import { NativeBaseProvider, extendTheme } from "native-base";
const wrapper = ({children}) => (
    <NativeBaseProvider
        initialWindowMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
    }}>
        {children}
    </NativeBaseProvider>
);
const dataFetch = 
    {
        "data": {
            "children": [
                {
                    "kind": "t3",
                    "data": {
                        "title": "Broke my family's poverty cycle - my wife and I just bought our first home!",
                        "link_flair_richtext": [],
                        "subreddit_name_prefixed": "r/pics",
                        "score": 93899,
                        "thumbnail": "https://b.thumbs.redditmedia.com/T2csfDDvwLY6cPxX_g4lTbr9O2OTS3LsTUTGkS3oAeE.jpg",
                        "created": 1627572227.0,
                        "num_comments": 2556,
                        "author": "PrattlesnakeEsquire",
                        "permalink": "/r/pics/comments/otzlkk/broke_my_familys_poverty_cycle_my_wife_and_i_just/"
                    }
                },
            ]
        }
    }

describe('Testing For Menus Top Tab Bar Buttons', ()=>{
    beforeEach(()=>{
        global.fetch = jest.fn(()=> Promise.resolve({
            json: ()=> Promise.resolve(dataFetch)
        }));

    })
    it("Check Top Tab View and test data", ()=>{
        const TopView = render(
            <MockedNavigator component={Top} params={{
                type:"top",
                mockData: dataFetch
            }} />,{wrapper});
        expect(TopView.toJSON()).toMatchSnapshot();
        expect(TopView.getByTestId("top-screen")).toBeDefined();
        expect(TopView.getByTestId('flatlist').props.data.length).not.toEqual(0)
    });
    it("Check Hot Tab View and test data", ()=>{
        const HotView = render(
            <MockedNavigator component={Top} params={{
                type:"hot",
                mockData: dataFetch
            }} />,{wrapper});
        expect(HotView.toJSON()).toMatchSnapshot();
        expect(HotView.getByTestId("top-screen")).toBeDefined();
        expect(HotView.getByTestId('flatlist').props.data.length).not.toEqual(0)
    });
    it("Check New Tab View and test data", ()=>{
        const NewView = render(
            <MockedNavigator component={Top} params={{
                type:"new",
                mockData: dataFetch
            }} />,{wrapper});
        expect(NewView.toJSON()).toMatchSnapshot();
        expect(NewView.getByTestId("top-screen")).toBeDefined();
        expect(NewView.getByTestId('flatlist').props.data.length).not.toEqual(0)
    });

}); 