import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    safeArea: {
        safeArea: {
            flex: 1,
        }
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingTop: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    input: {
        borderWidth: 1,
        flex: 0.95,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#212121'
    },
    listContainer: {
        marginTop: 25,
        // flex: 1,
    },
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#D4D7ED',
        paddingHorizontal: 10,
        borderRadius: 10,
        color: '#212121',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,

    },
    listItem: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121'
    },
    list: {
        // flex: 1,
        gap: 15,
        paddingBottom: 10,
    },
    icon:{
        color: 'red',
        fontSize: 16,
    },
    modalContainer:{
        justifyContent:"center",
        alignItems:'center',
        marginTop: 60,
        paddingVertical:20,
    },
    modalTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalDetailContainer:{
        paddingVertical: 20,
    },
    modalDetalMessage:{
        fontSize: 14,
        color:'#212121',
    },
    selectedTask:{
        fontSize: 14,
        color:'#212121',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
    modalButtonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-around',
        marginHorizontal: 20,
    },
});        
