import React from "react";
import { ScrollView, SectionList, Text, StyleSheet } from "react-native";
import BookDetail from "./BookDetail";
import bookData from "../json/bookData.json";

const Booklist = () => {
    const renderItem = ({ item }) => < BookDetail book={item} />
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.listheader}>Popular Books</Text>
        <SectionList
          sections = {bookData}
          renderItem = {renderItem}
          keyExtractor={ item => item.title }
          //renderSectionHeader={({section:{title}}) => <Text style ={styles.listheader}>{title}</Text>}
          horizontal = {true}
        />
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    height:256,
    marginLeft:20
  },
  listheader:{
    fontSize:24,
    fontWeight:'500',
    color:"black",
    marginBottom:16
  }
});

export default Booklist;