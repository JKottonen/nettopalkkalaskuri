import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import colors from '../assets/colors';


export default function InputUnit(props) {
  return (
    <View style={styles.textFieldUnit}>

      <Text style={styles.tableText}>{props.title}</Text>
      
      <TextInput
          style={styles.inputField}
          placeholder={"0"}
          value={props.value34}
          onChangeText={(text) => props.valueChanged(parseFloat(text))}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    textFieldUnit: {
      flexDirection: "column",
      padding: 5,
      flex: 1/3
    },
    inputField: {
      backgroundColor: colors.formWhite,
      borderWidth: 1,
      borderColor: colors.liningColor,
      padding: 5
    },
    outputField: {
      backgroundColor: colors.formWhite,
      borderWidth: 1,
      borderColor: colors.liningColor,
    },
    tableText: {
      fontSize: 20,
      color: colors.textColor,
    },
  });