import React from "react";
import { ScrollView, SectionList, Text, StyleSheet, View } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts,Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Box, Text} from "@gluestack-ui/themed";

import BookDetail from "./BookDetail";
import bookData from "../json/bookData.json";

const Booklist = () => {
    const renderItem = ({ item }) => < BookDetail book={item}/>
    let [fontsLoaded] = useFonts({
      Roboto_500Medium
    });
    if(!fontsLoaded){
      return<AppLoading/>;
    }else{
      return (
        <Box>
          <Text style={styles.listheader}>Popular Books</Text>
          <SectionList
            style={styles.sectionlist}
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
    height:256,
    width:"auto",
  },
  sectionlist:{
    height:256,
    marginLeft:20,
    marginBottom:16,
  },
  listheader:{
    fontSize:24,
    fontWeight:'500',
    color:"black",
    marginBottom:16,
    marginLeft:20,
    fontFamily:'Roboto_500Medium'
  }
});

export default Booklist;