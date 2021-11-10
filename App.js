import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

import InputUnit from './components/InputUnit';

import colors from './assets/colors';

export default function App() {
  const [hours, setHours] = useState();

  const salAndTax = calculateSalary();
  const salary = salAndTax[0]
  const tax = salAndTax[1]

  const netSalary = salary - tax

  function calculateSalary() {
    return [parseFloat(hours),2]
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.headerText}>Laske palkka</Text>

      <View style= {styles.inputWrapper}>
        
        <InputUnit title="Tunnit" valueChanged={setHours}/>

      </View>

      <View style={styles.outputWrapper}>
        
        <View style={styles.textFieldUnit}>
          <Text style={styles.tableText}>Bruttopalkka</Text>
          <View style={styles.inputField}>
          <Text style= {styles.tableText}> {salary.toFixed(2)} </Text>
          </View>
        </View>

        <View style={styles.textFieldUnit}>
          <Text style={styles.tableText}>Nettopalkka</Text>
          <View style={styles.inputField}>
          <Text style= {styles.tableText}> {netSalary.toFixed(2)} </Text>
          </View>
        </View>

      </View>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
//    alignContent: "flex-start",
//    justifyContent: "flex-start",
    backgroundColor: colors.primaryBackground,
  },
  headerText: {
    flex: 0.2,
    fontSize: 25,
    fontWeight: "bold",
    color: colors.textColor,
    paddingTop: 50,
    paddingLeft: 10,
    backgroundColor: colors.SecondaryBackground,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 0,
//    backgroundColor: "white",
  },
  outputWrapper: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
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