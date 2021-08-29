import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function ListEmptyView() {
  return (
    <View style={styles.ListItemContainer}>
      <Text style={styles.ListItemText}> Todo list is empty &#128540;</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ListItemContainer: {
    backgroundColor: "#ffADC6",
    marginVertical: 2,
    height: 50,
    padding: 8,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    flexDirection: "row"
  },
  ListItemText: {
    color: "#fff",
    letterSpacing: 1,
    marginHorizontal: 3,
    fontSize:25
  }
});

export default ListEmptyView
