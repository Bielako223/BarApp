import { StyleSheet,StatusBar } from 'react-native';

const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#f9c2ff',
    },
    selectedItem: {
      backgroundColor: '#6e3b6e',
    },
    itemText: {
      fontSize: 18,
    },
    button: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      width:'45%',
      backgroundColor: '#7200ee',
      padding: 15,
      borderTopLeftRadius:30,
      borderBottomLeftRadius:30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRightColor:'black',
    },
    button2: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      width:'45%',
      backgroundColor: '#6200ee',
      padding: 15,
      borderTopRightRadius:30,
      borderBottomRightRadius:30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button2off: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width:'45%',
        backgroundColor: '#A9A6A6',
        padding: 15,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
      },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    topBlock:{
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '5%',
      backgroundColor: '#fff',
    },
    container: {
      height: '100%', 
      paddingTop: StatusBar.currentHeight,
      
    },
  });

  export default styles;