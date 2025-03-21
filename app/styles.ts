import { StyleSheet,StatusBar } from 'react-native';

const styles = StyleSheet.create({
    bgColorDarkMode:{
      backgroundColor: '#050712'
    },
    bgColorWhiteMode:{
      backgroundColor: '#E8F8F5'
    },
    fontColorDarkMode:{
      color: 'white'
    },
    fontColorWhiteMode:{
      color: 'black'
    },
    buttonDarkMode:{
      backgroundColor: '#FF5E57'
    },
    buttonWhiteMode:{
      backgroundColor: '#2ECC71'
    },
    bgButtonSelectedColorDarkMode:{
      backgroundColor: '#27AE60'
    },
    bgbuttonSelectedColorWhiteMode:{
      backgroundColor: '#F39C12'
    },
    bottomButtonDarkMode:{
      backgroundColor: '#fe4a43'
    },
    bottomButtonWhiteMode:{
      backgroundColor: '#2ECC71'
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:20,
    },
    selectedItem: {
      backgroundColor: '#F39C12',
    },
    itemReverseColors: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#27AE60',
      borderRadius:25,
    },
    selectedItemReverseColors: {
      backgroundColor: '#ff4d4d',
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
      padding: 15,
      borderRadius:20,
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
      borderRadius:20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button2off: {
        backgroundColor: '#A9A6A6',
      },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
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
      position: 'relative',
      flex: 1
    },
    topText:{
      textAlign: 'center',
      fontSize:20,
      margin:5,
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
      width: 240,
      height: 300,
      marginBottom: 40
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
      width:'64%',
      padding: 15,
      borderRadius:20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRightColor:'black',
      marginBottom:25,
    },
    mainDrink:{
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#F39C12',
      borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    },
    othersDrinks:{
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:20,
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
      
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },
    changeLanguageContainer: {
      width: '90%',
      height: 40,
      justifyContent: 'flex-end', 
      alignItems: 'flex-end', 
      marginTop: 5 ,
      marginBottom: 5
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
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
    },
    closeButton: {
      marginTop: 20,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 25,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    closeButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    recipeButton: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 30,
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop: 10, 
      flexDirection: 'row', 
    },
    buttonText1: {
      fontSize: 18, 
      color: '#fff', 
      fontWeight: 'bold', 
      marginRight: 10,
    },
    noDrinksText: {
      textAlign: 'center',
      margin: 100,
      fontSize: 50
    },
    searchContainer: {
  padding: 10
},
searchInput: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  paddingHorizontal: 10,
},instructionTextTop:{
  fontSize: 25,
  fontWeight: 'bold',
  marginBottom: 30,
},
instructionTextList:{
  fontSize: 20,
  marginBottom: 15,
},

containerInstruction: {
  padding: 20,
  marginTop: 50
},
contentContainerInstruction: {
  flex: 1, // Kontener na teksty wypełnia resztę dostępnej przestrzeni
  justifyContent: 'flex-start', // Centruje treść na górze
  padding: 10, // Odstępy wewnątrz kontenera
},
textNoneResultMessage: {
  fontSize: 25,
  padding: 10
},
mt:{
  paddingLeft:5
},
iconscontainer:{
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
},
iconstext:{
  fontSize: 35
}
  });

  export default styles;