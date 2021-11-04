import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

import colors from './assets/colors';

export default function App() {
  const [hours, setHours] = useState();
  const [eveningHours, setEveningHours] = useState();
  const [nightHours, setNightHours] = useState();
  const [sundayHours, setSundayHours] = useState();
  const [taxPerc, setTaxPerc] = useState();
  const [hourlyWage, setHourlyWage] = useState();

  const salAndTax = calculateSalary(hourlyWage, hours, eveningHours, nightHours, sundayHours, taxPerc);
  const salary = salAndTax[0]
  const tax = salAndTax[1]

  const netSalary = salary - tax

  function calculateSalary(hourlyWage, hours, eveningHours, nightHours, sundayHours, taxPerc) {
    hours = parseFloat(hours);
    eveningHours = parseFloat(eveningHours);
    nightHours = parseFloat(nightHours);
    sundayHours = parseFloat(sundayHours);
    hourlyWage = parseFloat(hourlyWage);

    let salary = hourlyWage * hours;

    salary += eveningHours * 1.1;
    salary += nightHours * 2.17;
    salary += sundayHours * hourlyWage;

    let tax = salary * taxPerc/100;
        tax = tax + salary * 0.0715;
        tax = tax + salary * 0.0125;

    let returnValues = [salary, tax]
    return returnValues;
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>Laske palkka</Text>

      <View style= {styles.inputWrapper}>

        <View style={styles.inputUnit}>
          <Text style={styles.tableText}>Tunnit</Text>
          <TextInput
            style={styles.inputField}
            placeholder={"0"} 
            value={hours}
            onChangeText={(text) => setHours(text)}
          />
        </View>

        <View style={styles.inputUnit}>
          <Text style={styles.tableText}>Iltalisä</Text>
          <TextInput
            style={styles.inputField}
            placeholder={"0"} 
            value={eveningHours}
            onChangeText={(text) => setEveningHours(text)}
          />
        </View>

        <View style={styles.inputUnit}>
          <Text style={styles.tableText}>Yölisä</Text>
          <TextInput
            style={styles.inputField}
            placeholder={"0"} 
            value={nightHours}
            onChangeText={(text) => setNightHours(text)}
          />
        </View>

        <View style={styles.inputUnit}>
          <Text style={styles.tableText}>Pyhälisä</Text>
          <TextInput
            style={styles.inputField}
            placeholder={"0"} 
            value={sundayHours}
            onChangeText={(text) => setSundayHours(text)}
          />
        </View>

      </View>

      <View style= {styles.inputWrapper}>

        <View style={styles.inputUnit}>
          <Text style={styles.tableText}>Tuntipalkka</Text>
          <TextInput
            style={styles.inputField}
            placeholder={"0"} 
            value={hourlyWage}
            onChangeText={(text) => setHourlyWage(text)}
          />
        </View>

        <View style={styles.inputUnit}>
          <Text style={styles.tableText}>Veroprosentti</Text>
          <TextInput
            style={styles.inputField}
            placeholder={"0"} 
            value={taxPerc}
            onChangeText={(text) => setTaxPerc(text)}
          />
        </View>

      </View>

      <View style={styles.outputWrapper}>
        
        <View style={styles.inputUnit}>
          <Text style={styles.tableText}>Bruttopalkka</Text>
          <View style={styles.inputField}>
          <Text style= {styles.tableText}> {salary.toFixed(2)} </Text>
          </View>
        </View>

        <View style={styles.inputUnit}>
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
    alignContent: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: colors.primaryBackground,
  },
  headerText: {
    flex: 0.1,
    fontSize: 25,
    fontWeight: "bold",
    color: colors.textColor,
    paddingTop: 30,
    paddingLeft: 10,
    backgroundColor: colors.SecondaryBackground,
  },
  inputWrapper: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  outputWrapper: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  outputArea: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  inputUnit: {
    flexDirection: "column",
    padding: 10,
  },
  inputField: {
    backgroundColor: colors.formWhite,
    borderWidth: 1,
    borderColor: colors.liningColor,
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
  checkBoxWrapper: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  checkBox: {
    height: 30,
    width: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.liningColor
  },
});
