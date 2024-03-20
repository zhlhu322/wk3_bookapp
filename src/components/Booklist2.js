import React from "react";
import { ScrollView, SectionList, Text, StyleSheet, View } from "react-native";
import BookDetail from "./BookDetail2";
import bookData from "../json/bookData2.json";
import AppLoading from 'expo-app-loading';
import { useFonts,Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Box, Text} from "@gluestack-ui/themed";

const Booklist2 = () => {
    const renderItem = ({ item }) => < BookDetail book={item} />
    let [fontsLoaded] = useFonts({
      Roboto_500Medium
    });
    if(!fontsLoaded){
      return<AppLoading/>;
    }else{
      return (
        <Box>
          <Text style={styles.listheader}>Newest</Text>
          <SectionList
            style ={styles.sectionlist}
            sections = {bookData}
            renderItem = {renderItem}
            keyExtractor={ item => item.title }
            horizontal = {true}
          />
        </Box>
      );
    }
};

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    marginLeft:20,
    height:120
  },
  listheader:{
    fontSize:24,
    fontWeight:'500',
    color:"black",
    marginBottom:16,
    marginLeft:20,
    fontFamily:'Roboto_500Medium'
  },
  sectionlist:{
    height:256,
    marginLeft:20,
  }
});

export default Booklist2;