import React, { useState } from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';






// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/


//https://redux-toolkit.js.org/introduction/getting-started





interface B{
    title:string,
    onPress:()=>void,
    isLoading:boolean,
}

const CBtn = ({ title, onPress, isLoading }:any) => {
  const [buttonText, setButtonText] = useState(title);
  
  const handlePress = () => {
    // if (!isLoading) {
      onPress();
    // }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text style={styles.text}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1e88e5',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CBtn;
