import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";



const BookDetail = (props) => {
  const { image,bookname,author } = props.book;
  return (
    <View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 10
  },
  albumName: {
    fontWeight:"600",
    fontSize:18
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 370,
    width: 370
  }
});

export default BookDetail;