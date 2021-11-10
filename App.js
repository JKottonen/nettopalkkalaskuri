import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import InputUnit from './components/InputUnit';

import colors from './assets/colors';

function reduceData(state, action) {
  switch(action.type) {
    case 'hours':
    case 'eveningHours':
    case 'nightHours':
    case 'sundayEveningHours':
    case 'sundayNightHours':
    case 'sundayHours':
    case 'hourlyWage':
    case 'taxRate':
      return {...state, [action.type]: action.value}

    default:
      throw new Error();
  }
}

function App() {

  const [state, dispatch] = useReducer(reduceData, {
      hours: 0,
      eveningHours: 0,
      nightHours: 0,
      sundayEveningHours: 0,
      sundayNightHours: 0,
      sundayHours: 0,
      hourlyWage: 0,
      taxRate: 0,
    });

  const [grossSalary, setGross] = useState(0);
  const [netSalary, setNet] = useState(0);


  useEffect(() => {
    calculateSalary(state)
  }, [state]);


  const calculateSalary = (state) => {
    // Make all values float. NaN is 0.0
    let hours = parseFloat(state.hours || 0)
    let eveningHours = parseFloat(state.eveningHours || 0)
    let nightHours = parseFloat(state.nightHours || 0)
    let sundayEveningHours = parseFloat(state.sundayEveningHours || 0)
    let sundayNightHours = parseFloat(state.sundayNightHours || 0)
    let sundayHours = parseFloat(state.sundayHours || 0)
    let hourlyWage = parseFloat(state.hourlyWage || 0)
    let taxRate = parseFloat(state.taxRate || 0)

    let eveningAllowance = 1.1;
    let nightAllowance = 2.17;
    let pensionContribution = 0.0715;
    let unemploymentInsurance = 0.0125;

    let gross = hours * hourlyWage + 
                eveningHours * eveningAllowance + 
                nightHours * nightAllowance + 
                sundayEveningHours * eveningAllowance * 2 +
                sundayNightHours * nightAllowance * 2 +
                sundayHours * hourlyWage;
    
    let withholding = gross * taxRate/100 +
                      gross * pensionContribution +
                      gross * unemploymentInsurance;

    setGross(gross);
    setNet(gross - withholding);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.headerText}>Laske palkka</Text>

      <View style= {styles.inputWrapper}>
        
        <InputUnit title="Tunnit" valueChanged={(t) => {dispatch({type: "hours", value: t})}}/>
        <InputUnit title="Iltalisä" valueChanged={(t) => {dispatch({type: "eveningHours", value: t})}}/>
        <InputUnit title="Yölisä" valueChanged={(t) => {dispatch({type: "nightHours", value: t})}}/>

      </View>

      <View style= {styles.inputWrapper}>

        <InputUnit title="Pyhäiltalisä" valueChanged={(t) => {dispatch({type: "sundayEveningHours", value: t})}}/>
        <InputUnit title="Pyhäyölisä" valueChanged={(t) => {dispatch({type: "sundayNightHours", value: t})}}/>
        <InputUnit title="Pyhälisä" valueChanged={(t) => {dispatch({type: "sundayHours", value: t})}}/>

      </View>

      <View style= {styles.inputWrapper}>
        <InputUnit title="Tuntipalkka" valueChanged={(t) => {dispatch({type: "hourlyWage", value: t})}}/>
        <InputUnit title="Veroprosentti" valueChanged={(t) => {dispatch({type: "taxRate", value: t})}}/>
      </View>

      <View style={styles.outputWrapper}>
        
        <View style={styles.textFieldUnit}>
          <Text style={styles.tableText}>Bruttopalkka</Text>
          <View style={styles.inputField}>
          <Text style= {styles.tableText}> {grossSalary.toFixed(2)} </Text>
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

export default App;