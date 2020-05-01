import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        color: '#13131a',
        fontWeight: 'bold'
    },
    user: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 30,
        marginBottom: 16,
    },
    userProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 20,
    },
    userValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },

    listText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    list: {
        marginTop:24,
    },
    data: {
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16,
    },
    dataProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 20,
    }

}
)