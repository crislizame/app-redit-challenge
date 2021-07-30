import {StyleSheet} from 'react-native'
import commonColor from "../../../theme/variables/commonColor";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    textCenter : {
        textAlign : 'center',
        width : '100%',
    },
    container : {
        flex : 1,
        opacity : 1,
        backgroundColor:commonColor.brandPrimary,
    },
    container2 : {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content_form : {
        // flex : 1,
        // justifyContent : 'center',
    },
    logo: {
        position: 'absolute',
        top: 0,
        // left: wp('40%'),
        width:wp(100),
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    CircleShapeView: {
        alignSelf:"center",
        alignItems:"center",
        padding:hp(3),
        flexDirection:"column",
        width: hp(18),
        height: hp(18),
        borderRadius: hp(18)/2,
        backgroundColor: 'white',
    
    },
});

export default styles
