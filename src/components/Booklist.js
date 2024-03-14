import React from "react";
import { ScrollView, SectionList } from "react-native";
import BookDetail from "./BookDetail";
import bookData from "../json/bookData.json";

const Booklist = () => {
    const renderItem = ({ item }) => < BookDetail book={item} />
    return (
      <ScrollView>
       <SectionList
          sections = {bookData}
          renderItem = {renderItem}
          keyExtractor={ item => item.title }
       />
      </ScrollView>
    );
};

export default Booklist;