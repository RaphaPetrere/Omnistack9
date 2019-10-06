import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//view é um box, container; //text é um texo, <h1> <span>... //

import Routes from './src/routes';

export default function App() {
  return <Routes />
}
//style css é Camel Case invés de hífen e os atributos são strings, logo, sempre em ' '
//o react native é display flex e column por padrão (bem melhor, pqp)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
