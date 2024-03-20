import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, Text, Heading, Image, Button, ButtonText } from "@gluestack-ui/themed";

const DetailScreen = () => {
  return (
    <Box style={styles.container}>
      <Text style={styles.textStyle}>This is Page 2</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});

export default DetailScreen;