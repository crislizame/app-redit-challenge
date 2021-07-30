import React from "react";
import Setup from "./src/boot/setup";
import Font from "expo-font";
import { NativeBaseProvider, extendTheme } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';

import getTheme from "./src/theme/components/index";
import variables from "./src/theme/variables/commonColor";

export default ({ children, theme }) => {


    return (
      <NativeBaseProvider style={getTheme(variables)}>

    <Setup />
    </NativeBaseProvider>
    )
    ;
    
}
