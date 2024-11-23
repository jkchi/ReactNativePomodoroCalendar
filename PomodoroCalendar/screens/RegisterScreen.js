
import { useState, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import InfoBox from '../component/InfoBox';

function RegisterScreen({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <InfoBox title = "Register" 
                 navigation={navigation}
                 submitScreen = 'Login' 
                 redirectScreen = 'Login'
                 />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bodyContainer:{
      padding:"10%"
    }
  });
export default RegisterScreen;