import { StyleSheet,StatusBar } from 'react-native';

const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#27AE60',
      borderRadius:25,
    },
    selectedItem: {
      backgroundColor: '#F39C12',
    },
    itemText: {
      fontSize: 18,
      color:'white'
    },
    button: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      width:'43%',
      backgroundColor: '#2ECC71',
      padding: 15,
      borderRadius:30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRightColor:'black',
    },
    button2: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      width:'43%',
      backgroundColor: '#2ECC71',
      padding: 15,
      borderRadius:30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button2off: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width:'43%',
        backgroundColor: '#A9A6A6',
        padding: 15,
        borderRadius:30,
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
      backgroundColor:'#E8F8F5'
      
    },
    topText:{
      textAlign: 'center',
      fontSize:20,
      margin:5,
      marginTop:8,
      padding:5,
      fontWeight: '500',
    },
    boldText:{
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      fontSize:25,
    },
    bottomSpace:{
      marginBottom:'20%'
    },
    image: {
      width: 230,
      height: 230,
    },
    imgContainer:{
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    logoText:{
      fontWeight: 'bold',
      fontSize:30,
      marginBottom:40
    },
    startButton: {
      width:'50%',
      backgroundColor: '#2ECC71',
      padding: 15,
      borderRadius:30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRightColor:'black',
      marginBottom:25
    },
    mainDrink:{
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#F39C12',
      borderRadius:25,
    justifyContent: 'center',
    alignItems: 'center',
    },
    othersDrinks:{
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#27AE60',
      borderRadius:25,
    justifyContent: 'center',
    alignItems: 'center',
    },
    finalDrinkContainer:{
      flex: 1,
    justifyContent: 'center',
    },
    finalDrinkbuttonContainer:{
      marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    },
    percentageText:{
      fontSize: 18,
      color:'white',
      fontWeight:'300'
    },
    percentageText1:{
      fontSize: 14,
      color:'white',
      fontWeight:'300'
    },
    drinkTextBold:{
      fontWeight:'bold'
    },
    helpText:{
      textAlign: 'center',
      fontSize:13,
      marginTop:8,
      padding:5,
      fontWeight: '500',
    }
    
  });

  export default styles;