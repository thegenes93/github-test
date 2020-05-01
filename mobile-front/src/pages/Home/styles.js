import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,

    },
    headerText:{
        textAlign:'center',
        fontSize: 20,
        color: '#13131a',
        fontWeight:'bold',
    },
    list: {
        marginTop:24,
    },
    data:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16,
    },
    dataProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold'
    },
    dataValue:{   
        marginTop:5,
        fontSize:15,
        marginBottom:12,
        color:'#737380',
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    detailsButtonText:{
        color:'#e02041',
        fontSize:15,
        fontWeight:'bold'
    }
})