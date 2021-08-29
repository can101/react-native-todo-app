import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

function ListItemView({text,index}) {
  return (
    <View  style={styles.ListItemContainer}>
      <Text style={[styles.ListItemText, styles.ListItemIndex]}>{index}</Text>
      <Text style={styles.ListItemText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ListItemContainer: {
    backgroundColor: "#ffADC6",
    marginVertical: 2,
    maxHeight: 40,
    padding: 8,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    flexDirection: "row"
  },
  ListItemText: {
    color: "#fff",
    letterSpacing: 1,
    marginHorizontal: 3,
  },
  ListItemIndex: {
    width: 20,
    textAlign: "center",
    backgroundColor: "white",
    color: "#ffADC6",
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 4
  }
});

export default ListItemView
