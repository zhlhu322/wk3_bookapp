import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
//import { Roboto } from 'react-native-google-fonts';

const BookDetail = (props) => {
  let { book } = props;
  return (
    <View style ={styles.cardContainerStyle}>
      <Image
        style ={styles.imageStyle}
        source={{uri:book.image}}
      />
      <Text style = {styles.bookname}>{book.bookname}</Text>
      <Text style = {styles.author} >{book.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({  
    imageStyle: {
        height:200,
        width: 140
    },
    cardContainerStyle: {
        height:256,
        width:140,
        elevation: 1,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        marginRight:16
    },
    bookname:{
      fontSize:16,
      fontWeight:'700',
    },
    author:{
      fontSize:12,
      fontWeight:'500',
      color:"#666666",
      opacity:50,
      //fontFamily:Roboto
    },

});

export default BookDetail;