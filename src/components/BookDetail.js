import React from "react";
import { StyleSheet, Text, Image, Pressable } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts,Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Box, HStack, VStack, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const BookDetail = ({book}) => {
  const { navigate } = useNavigation();
  let [fontsLoaded] = useFonts({
    Roboto_500Medium
  });
  if(!fontsLoaded){
    return<AppLoading/>;
  }else{
   return (
      <Box 
        width={140} height={256} elevation ={1}
        marginRight={16}
      >
        <VStack justifyContent="space-around">
          <Pressable onPress={() => navigate('Detail', book)}>
          <Image
            width={140} height={200}
            source={{ uri:book.image }}
          />
          </Pressable>
          <Text style = {styles.bookname}>{book.bookname}</Text>
          <Text style = {styles.author} >{book.author}</Text>
        </VStack>
        
      </Box>
    );
  }
  
}

const styles = StyleSheet.create({  
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
      fontFamily:'Roboto_500Medium'
    },
    author:{
      fontSize:12,
      fontWeight:'500',
      color:"#666666",
      opacity:50,
      fontFamily:'Roboto_500Medium'
    },

});

export default BookDetail;