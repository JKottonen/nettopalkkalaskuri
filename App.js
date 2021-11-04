import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import colors from './assets/colors';

export default function App() {
  function calculateSalary(hours, eveningHours, nightHours, sundayHours) {
    hours = parseFloat(hours);
    eveningHours = parseFloat(eveningHours);
    nightHours = parseFloat(nightHours);
    sundayHours = parseFloat(sundayHours);

    let hourlyWage = 15

    return (hourlyWage * hours) + eveningHours * 1.2;
  }

  const [hours, setHours] = useState();
  const [eveningHours, setEveningHours] = useState();
  const [nightHours, setNightHours] = useState();
  const [sundayHours, setSundayHours] = useState();
  const salary = calculateSalary(hours, eveningHours, nightHours, sundayHours);

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

      <Text style= {styles.tableText}> {salary} </Text>
    
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
  tableText: {
    fontSize: 12,
    color: colors.textColor,
  }
});
