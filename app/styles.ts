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
      marginTop:50,
      padding:5,
      fontWeight: '500',
    },
    topText1:{
      textAlign: 'center',
      fontSize:24,
      margin:5,
      marginTop:8,
      padding:5,
      fontWeight: '500',
    },
    boldText:{
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      fontSize:25,
      color: 'red'
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
    },
    langContainer:{
      position: 'absolute',
    top: 30,
    right: 20,
    width: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },
    langflagContainer:{
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:5
    },
    drinkImg:{
      width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius:25
    },
    drinkImgContainer:{
      width: 200,  // specify the width of the image
      height: 200, // specify the height of the image
    },
    drinkImgContainer2:{
      justifyContent: 'center',
    alignItems: 'center',
    },
    buttonDrinkList: {
      
      width:'40%',
      backgroundColor: '#F39C12',
      padding: 15,
      borderRadius:30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    drinkListButtonContainer:{
      justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20, // Odstęp od dołu ekranu
      left: 0,
      right: 0,
      alignItems: 'center', // Centrowanie przycisku na środku
      zIndex: 100, // Zwiększenie priorytetu, aby przycisk zawsze był nad innymi elementami
    },
  });

  export default styles;