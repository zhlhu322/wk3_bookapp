import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar, SectionList } from 'react-native';
import DATA from "./src/json/bookData.json"
import Booklist from "./src/components/Booklist"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Booklist/>
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  sec_header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});


export default App;