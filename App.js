import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCx9HVBM0JuC7QGVprije7BXS3VJy6FXQk',
      authDomain: 'auth-1d1a3.firebaseapp.com',
      databaseURL: 'https://auth-1d1a3.firebaseio.com',
      projectId: 'auth-1d1a3',
      storageBucket: 'auth-1d1a3.appspot.com',
      messagingSenderId: '921651069634',
      appId: '1:921651069634:web:71f057698a9534f2e3f15b'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;